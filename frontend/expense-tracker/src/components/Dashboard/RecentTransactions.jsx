import React from "react";
import { LuArrowRight } from "react-icons/lu";
import moment from "moment";
import TransactionInfoCard from "../Cards/TransactionInfoCard";
import { ImSpinner2 } from "react-icons/im";
const RecentTransactions = ({ transactions, onSeeMore, loading }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Recent Transactions</h5>
        <button className={loading ? "card-btn-disable":"card-btn" } onClick={onSeeMore}>
          See All <LuArrowRight className="text-base" />
        </button>
      </div>
      {
        loading ? 
        <div className="flex items-center justify-center h-full w-full">
          <ImSpinner2 className="text-purple-500 animate-spin" size={32} />
        </div> : 
        <div className="mt-6">
          {transactions?.map((item) => (
            <TransactionInfoCard
              key={item._id}
              title={item.type === "expense" ? item.category : item.source}
              icon={item.icon}
              date={moment(item.date).format("Do MMM YYYY")}
              amount={item.amount}
              type={item.type}
              hideDeleteBtn
            />
          ))}
        </div>
      }


    </div>
  );
};

export default RecentTransactions;
