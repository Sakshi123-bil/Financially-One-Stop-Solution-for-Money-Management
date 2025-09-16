import React, { useState } from 'react';
import { useEffect } from 'react';
import CustomPieChart from '../Charts/CustomPieChart';
import { ImSpinner2 } from 'react-icons/im';

const COLORS = ["#875CF5","#FA2C37","#FF6900","#4f39f6"]
const RecentIncomeWithChart = ({ data, totalIncome ,loading }) => {
  const [chartData, setChartData] = useState([]);

  const prepareChartData = () => {
    const dataArr = data?.map((item) => ({
      name: item?.source,
      amount: item?.amount,
    }));

    setChartData(dataArr);
  };

  useEffect(()=>{
   prepareChartData();

   return () => {}
  },[data]);

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Last 60 Days Income</h5>
      </div>
      {
        loading ? 
        <div className="flex items-center justify-center h-full w-full">
                <ImSpinner2 className="text-purple-500 animate-spin" size={32} />
        </div> : 
        <CustomPieChart
        data={chartData}
        label="Total Income"
        totalAmount={`$${totalIncome}`}
        showTextAnchor
        colors={COLORS}
      />
      }
      
    </div>
  );
};

export default RecentIncomeWithChart;
