import { Chart } from "../../interfaces/interfaces";

const chartColors = {
  red: "rgba(255, 99, 132, 0.2)",
  blue: "rgba(54, 162, 235, 0.2)",
  yellow: "rgba(255, 206, 86, 0.2)",
  green: "rgba(75, 192, 192, 0.2)",
  purple: "rgba(153, 102, 255, 0.2)",
  orange: "rgba(255, 159, 64, 0.2)",
  borderRed: "rgba(255, 99, 132, 1)",
  borderBlue: "rgba(54, 162, 235, 1)",
  borderYellow: "rgba(255, 206, 86, 1)",
  borderGreen: "rgba(75, 192, 192, 1)",
  borderPurple: "rgba(153, 102, 255, 1)",
  borderOrange: "rgba(255, 159, 64, 1)",
};

export const donutChartData: Chart["data"] = {
  labels: ["Gastos", "Ahorros", "Ingresos"],
  datasets: [
    {
      label: "# of Votes",
      data: [23, 40, 37],
      backgroundColor: [chartColors.red, chartColors.blue, chartColors.green],
      borderColor: [
        chartColors.borderRed,
        chartColors.borderBlue,
        chartColors.borderGreen,
      ],
      hoverOffset: 4,
    },
  ],
};

export const donutChartOptions: Chart["options"] = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};
