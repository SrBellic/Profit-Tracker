export interface Chart {
  data: {
    labels: string[];
    datasets: Array<{
      label: string;
      data: number[];
      backgroundColor: string[];
      borderColor: string[];
      hoverOffset: number;
    }>;
  };
  options: {
    responsive: boolean;
    plugins: {
      legend: {
        display: boolean;
        position?: "left" | "top" | "right" | "bottom" | "center" | "chartArea";
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
