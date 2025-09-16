import React, { useEffect, useState } from "react";
import { prepareExpenseChartData } from "../../utils/helper";
import CustomBarChart from "./CustomBarChart";
import { ImSpinner2 } from "react-icons/im";

const Last30DaysExpense = ({ data, loading }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareExpenseChartData(data);
    setChartData(result);

    return () => { };
  }, [data]);

  return (
    <div className="card col-span-1">
      <div className="flex items-center justify-center">
        <h5 className="text-lg">Last 30 Days Expenses</h5>
      </div>
      {loading ? 
      <div className="flex items-center justify-center h-full w-full">
        <ImSpinner2 className="text-purple-500 animate-spin" size={32} />
      </div> : 
      <CustomBarChart data={chartData} />}

    </div>
  )
}

export default Last30DaysExpense;