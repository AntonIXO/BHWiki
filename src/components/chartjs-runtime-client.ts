import { Chart, LinearScale, PointElement, ScatterController, Tooltip } from "chart.js";

Chart.register(LinearScale, PointElement, ScatterController, Tooltip);

export { Chart };
