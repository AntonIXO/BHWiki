import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";
import postgres from "postgres";

// Portable self-hosting entry point. Shared OptiHealth deployment uses the
// canonical /opt/optihealth_db/deploy/tenants/bhwiki.sh instead.
const connection = process.env.BHWIKI_ADMIN_DATABASE_URL;
if (!connection) throw new Error("Set BHWIKI_ADMIN_DATABASE_URL to a migration administrator; never use the app reader URL.");
const sql = postgres(connection, { max: 1, prepare: false, connect_timeout: 5, idle_timeout: 5, onnotice: () => {} });
try {
  const directory = resolve("supabase/migrations");
  const files = (await readdir(directory)).filter((name) => /^\d+_.*\.sql$/.test(name)).sort();
  await sql.begin(async (transaction) => {
    await transaction`SELECT pg_advisory_xact_lock(674928105)`;
    for (const filename of files) {
      const contents = await readFile(resolve(directory, filename), "utf8");
      const checksum = createHash("sha256").update(contents).digest("hex");
      const [exists] = await transaction`SELECT to_regclass('bhwiki.schema_migrations') IS NOT NULL AS present`;
      const applied = exists.present
        ? await transaction`SELECT checksum FROM bhwiki.schema_migrations WHERE version = ${filename}`
        : [];
      if (applied.length) {
        if (applied[0].checksum !== checksum) throw new Error(`Migration checksum mismatch: ${filename}`);
        console.log(`Already applied: ${filename}`);
        continue;
      }
      await transaction.unsafe(contents);
      await transaction`INSERT INTO bhwiki.schema_migrations (version, checksum) VALUES (${filename}, ${checksum})`;
      console.log(`Applied: ${filename}`);
    }
  });
} finally {
  await sql.end({ timeout: 2 });
}
