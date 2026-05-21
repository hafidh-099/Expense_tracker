import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useQuery } from "@tanstack/react-query";
import { listTransactionAPI } from "../../services/transaction/transactionServices";

ChartJS.register(ArcElement, Tooltip, Legend);

const TransactionChart = () => {
  const { data, isError, error, isLoading } = useQuery({
    queryFn: listTransactionAPI,
    queryKey: ["list-transaction"],
  });
  const total = data?.reduce(
    (acc, trans) => {
      if (trans?.type === "income") {
        acc.income += trans?.amount;
      } else {
        acc.expense += trans?.amount;
      }
      return acc;
    },
    { income: 0, expense: 0 },
  );
  // stracture data for the chart
  const chartData = {
    labels: ["income", "expense"],
    datasets: [
      {
        label: "Transactions",
        data: [total?.income, total?.expense],
        backgroundColor: ["#36A2EB", "#FF6384"],
        borderColor: ["#36A2EB", "#FF6384"],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    maintainAspectRation: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          padding: 25,
          boxWidth: 12,
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: "income vs expesne",
        font: {
          size: 18,
          weight: "bold",
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
    },
    catout: "70%",
  };
  return (
    <div className="my-8 p-6 bg-white rounded-lg shadow-xl border border-gray-200">
      <h1 className="text-2xl font-bold text-center mb-6">
        Transaction Overview
      </h1>
      <div style={{ height: "350px" }} >
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  );
};

export default TransactionChart;
