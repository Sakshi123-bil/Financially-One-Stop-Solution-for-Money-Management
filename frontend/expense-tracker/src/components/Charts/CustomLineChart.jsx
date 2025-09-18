import React from "react";
import {
    Tooltip,
    XAxis,
    YAxis,
    CartesianGrid,
    Area,
    AreaChart,
    ResponsiveContainer,
} from "recharts";

const CustomLineChart = ({data}) => {
   const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
        <p className="text-sm font-semibold text-purple-800 mb-1">
          {payload[0].payload.category}
        </p>
        <p className="text-xs text-gray-600">
          Amount:{" "}
          <span className="text-sm font-semibold text-gray-900">
            ${payload[0].payload.amount}
          </span>
        </p>
      </div>
    );
  }
  return null; // 👈 important, otherwise Recharts may complain
};

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#875cf5" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#875cf5" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid stroke="none" />
                    <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#555" }} />
                    <YAxis tick={{ fontSize: 12, fill: "#555" }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                        type="monotone"
                        dataKey="amount"
                        stroke="#875cf5"
                        fill="url(#incomeGradient)"
                        strokeWidth={2}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default CustomLineChart;