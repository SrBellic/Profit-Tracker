import { Chart } from "../../interfaces/interfaces";

const chartColors = {
  red: "rgba(255, 0, 102, 0.2)",
  blue: "rgba(0, 110, 255, 0.2)",
  yellow: "rgba(255, 206, 86, 0.2)",
  green: "rgba(75, 255, 100, 0.2)",
  purple: "rgba(153, 102, 255, 0.2)",
  orange: "rgba(255, 159, 64, 0.2)",
  borderRed: "rgba(255, 0, 102, 1)",
  borderBlue: "rgba(0, 110, 255, 1)",
  borderYellow: "rgba(255, 206, 86, 1)",
  borderGreen: "rgba(75, 255, 100, 1)",
  borderPurple: "rgba(153, 102, 255, 1)",
  borderOrange: "rgba(255, 159, 64, 1)",
};

export const donutChartData: Chart["data"] = {
  labels: ["Gastos", "Ahorros", "Ingresos"],
  datasets: [
    {
      label: "Total",
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

export const donutChartOptions: Partial<Chart["options"]> = {
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

export const lineChartData: Chart["data"] = {
  labels: ["Gastos", "Ahorros", "Ingresos"],
  datasets: [
    {
      label: "Total",
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

export const lineChartOptions: Chart["options"] = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    y: {
      beginAtZero: true,
    },
    // x: {
    //   type: "time",
    //   time: {
    //     unit: "day",
    //     displayFormats: {
    //       month: "dd/mm/yyyy",
    //     },
    //   },
    // },
  },
  plugins: {
    legend: {
      display: true,
      labels: {
        font: {
          size: 16,
        },
      },
      position: "left",
      align: "center",
    },
    title: {
      display: true,
      text: "Historico de Balance",
    },
  },
};
