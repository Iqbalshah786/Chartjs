import { StackedBarChartData } from "../constants/FAKE_DATA.JS";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Stacked Bar Chart",
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const StackedBarChart = () => {
  return (
    <div className="w-full max-w-4xl mt-4">
      <Bar data={StackedBarChartData} options={options} />
    </div>
  );
};

export default StackedBarChart;
