import { Chart } from "../../interfaces/interfaces";
import { COLORS } from "../../utils/constants";

export const donutChartData: Chart["data"] = {
  labels: ["Gastos", "Ahorros", "Ingresos"],
  datasets: [
    {
      label: "Total",
      data: [23, 40, 37],
      backgroundColor: [COLORS.red, COLORS.blue, COLORS.green],
      borderColor: [COLORS.borderRed, COLORS.borderBlue, COLORS.borderGreen],
      borderWidth: 3.25,
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
      backgroundColor: [COLORS.red, COLORS.blue, COLORS.green],
      borderColor: [COLORS.borderRed, COLORS.borderBlue, COLORS.borderGreen],

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
