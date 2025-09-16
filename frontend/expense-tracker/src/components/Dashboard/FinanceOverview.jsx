import React from "react";
import CustomPieChart from "../Charts/CustomPieChart";
const COLORS = ["#875CFF", "#FA7C27", "#FF6900"];
import { ImSpinner2 } from "react-icons/im";

const FinanceOverview = ({ totalBalance, totalIncome, totalExpense, loading }) => {
  const balanceData = [
    { name: "Total Balance", amount: totalBalance },
    { name: "Total Expenses", amount: totalExpense },
    { name: "Total Income", amount: totalIncome },
  ];

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Financial Overview</h5>
      </div>
      {loading ?
        <div className="flex items-center justify-center h-full w-full">
          <ImSpinner2 className="text-purple-500 animate-spin" size={32} />
        </div> :
        <CustomPieChart
          data={balanceData}
          label="Total Balance"
          totalAmount={`$${totalBalance}`}
          colors={COLORS}
          showTextAnchor
        />}

    </div>
  );
};

export default FinanceOverview;
