import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  TimeScale,
} from "chart.js";
import {
  donutChartData,
  donutChartOptions,
  lineChartData,
  lineChartOptions,
} from "./Charts.config";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  TimeScale
);

export function DonutChart() {
  return <Doughnut data={donutChartData} options={donutChartOptions} />;
}

export function LineChart() {
  try {
    return <Line data={lineChartData} options={lineChartOptions} />;
  } catch (error) {
    console.error("Error rendering LineChart:", error);
    return <div>Error rendering LineChart</div>;
  }
}
