import React, { useState, useEffect } from "react";
import CustomPieChart from "../Charts/CustomPieChart";

const COLORS = ["#875CF5", "#FA2C37", "#FF6900", "#4f39f6"];

const RecentIncomeWithChart = ({ data, totalIncome }) => {
  const [chartData, setChartData] = useState([]);

  const prepareChartData = () => {
    if (!data || data.length === 0) {
      setChartData([]);
      return;
    }

    // ✅ Combine amounts by category (source)
    const grouped = data.reduce((acc, item) => {
      const source = item?.source || "Unknown";
      if (!acc[source]) {
        acc[source] = { name: source, amount: 0 };
      }
      acc[source].amount += item?.amount || 0;
      return acc;
    }, {});

    setChartData(Object.values(grouped));
  };

  useEffect(() => {
    prepareChartData();
  }, [data]);

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Last 60 Days Income</h5>
      </div>
      <CustomPieChart
        data={chartData}
        label="Total Income"
        totalAmount={`$${totalIncome}`}
        showTextAnchor
        colors={COLORS}
      />
    </div>
  );
};

export default RecentIncomeWithChart;
