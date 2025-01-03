import { Chart } from "../../interfaces/interfaces";
import { COLORS, CHART_LABELS } from "../../utils/constants";

const LABELS = CHART_LABELS;

export const donutChartData: Chart["data"] = {
  labels: LABELS.BALANCE,
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
  labels: LABELS.MONTHS,
  datasets: [
    {
      label: LABELS.BALANCE[0],
      data: [10, 40, 37, 23, 11, 41, 12, 30],
      fill: true,
      backgroundColor: [COLORS.red],
      borderColor: [COLORS.borderRed],
      hoverOffset: 4,
    },
    {
      label: LABELS.BALANCE[1],
      data: [30, 50, 40, 28, 17, 45, 13, 32],
      fill: true,
      backgroundColor: [COLORS.blue],
      borderColor: [COLORS.borderBlue],
      hoverOffset: 4,
    },
    {
      label: LABELS.BALANCE[2],
      data: [40, 60, 50, 41, 12, 14, 56, 15],
      fill: true,
      backgroundColor: [COLORS.green],
      borderColor: [COLORS.borderGreen],
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
      display: false,
    },
    title: {
      align: "end",
      display: true,
      text: "Histórico de Balance",
      font: {
        size: 16,
        weight: "bold",
      },
    },
  },
};
