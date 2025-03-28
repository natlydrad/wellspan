import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Title,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Legend, Tooltip, Title);

export default function Chart({ userQoLData, averageQoLData, idealQoLData, startingAge = 30 }) {
  const maxLength = Math.max(
    averageQoLData.length,
    idealQoLData.length,
    userQoLData?.length || 0
  );

  // X-axis labels: actual ages
  const labels = Array.from({ length: maxLength }, (_, i) => startingAge + i);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Average American",
        data: averageQoLData.map(point => point.qualityOfLife),
        borderColor: "red",
        backgroundColor: "red",
        fill: false,
      },
      {
        label: "Ideal",
        data: idealQoLData.map(point => point.qualityOfLife),
        borderColor: "green",
        backgroundColor: "green",
        fill: false,
      },
    ],
  };

  if (userQoLData && userQoLData.length > 0) {
    chartData.datasets.unshift({
      label: "You",
      data: userQoLData, // just values
      borderColor: "blue",
      backgroundColor: "blue",
      fill: false,
    });
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Quality of Life Over Time" },
      tooltip: {
        callbacks: {
          label: (context) => `QoL: ${context.parsed.y.toFixed(1)}`
        }
      }
    },
    scales: {
      x: {
        title: { display: true, text: "Age (Years)" }
      },
      y: {
        title: { display: true, text: "Quality of Life (%)" },
        min: 0,
        max: 100
      }
    }
  };

  return (
    <div className="p-4 border rounded bg-white shadow-md w-full max-w-xl">
      <h2 className="text-xl font-semibold mb-2">Quality of Life Over Time</h2>
      <Line data={chartData} options={options} />
    </div>
  );
}
