import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const output=resolve('.next/standalone');
if(!existsSync(`${output}/server.js`)) throw new Error('Build BHWiki first with bun run build.');
mkdirSync(`${output}/.next`,{recursive:true});
cpSync('.next/static',`${output}/.next/static`,{recursive:true});
cpSync('public',`${output}/public`,{recursive:true});
cpSync('content',`${output}/content`,{recursive:true});
// Standalone Next reads these options when booting its own HTTP server.
process.env.HOSTNAME=process.env.BHWIKI_HOST||'127.0.0.1';
process.env.PORT=process.env.PORT||'3086';
await import(`${output}/server.js`);
