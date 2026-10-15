type ChartJsRuntime = typeof import("./chartjs-runtime-client");

let runtimePromise: Promise<ChartJsRuntime> | null = null;

/** Load Chart.js only when a chart is actually mounted in the browser. */
export function loadChartJs() {
  return (runtimePromise ??= import("./chartjs-runtime-client"));
}
