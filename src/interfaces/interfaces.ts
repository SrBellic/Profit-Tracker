export interface Chart {
  data: {
    labels: string[]; //En el grafico de lineas este muestra las etiquetas del eje x
    datasets: Array<{
      label: string;
      data: number[];
      backgroundColor: string[];
      borderColor: string[];
      borderWidth?: number;
      hoverOffset: number;
      tension?: number;
      fill?: boolean;
      pointRadius?: number;
      pointBorderColor?: string[];
      pointBackgroundColor?: string[];
    }>;
  };
  options: {
    responsive: boolean;
    maintainAspectRatio: boolean; //No usar con graficos de Pie o Dona
    scales: {
      //Uso para graficos de Linea
      y: {
        beginAtZero: boolean;
      };
      // x: {
      //   type: string;
      //   time: {
      //     unit: "day";
      //     displayFormats: {
      //       month: "dd/mm/yyyy" | "dd/mm/yy" | "mm/dd/yyyy" | "mm/dd/yy"; //chart.js solo acepta guiones como separadores
      //     };
      //   };
      // };
    };
    plugins: {
      legend: {
        display: boolean;
        labels?: {
          font: {
            size: 10 | 12 | 14 | 16 | 18 | 20;
          };
        };
        position?: "left" | "top" | "right" | "bottom" | "center" | "chartArea";
        align?: "start" | "center" | "end";
      };
      title: {
        align?: "start" | "center" | "end";
        position?: "top" | "bottom" | "left" | "right";
        display: boolean;
        text?: string;
        font?: {
          size: number;
          family?: string;
          weight: "normal" | "bold" | "lighter" | "bolder";
        };
      };
    };
  };
}

export interface Input {
  type: "number" | "text";
  placeHolder: string;
}
