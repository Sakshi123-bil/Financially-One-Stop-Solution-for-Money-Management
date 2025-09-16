import React from "react";
import { LuArrowRight } from "react-icons/lu";
import TransactionInfoCard from "../Cards/TransactionInfoCard";
import moment from "moment";
import { ImSpinner2 } from "react-icons/im";

const RecentIncome = ({ transactions, onSeeMore, loading }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Income</h5>

        <button className={loading ? "card-btn-disable" : "card-btn"} onClick={onSeeMore}>
          See All <LuArrowRight className="text-base" />
        </button>
      </div>
      {loading ?
        <div className="flex items-center justify-center h-full w-full">
          <ImSpinner2 className="text-purple-500 animate-spin" size={32} />
        </div> :
        <div className="mt-6">
          {transactions?.slice(0, 5).map((item) => (
            <TransactionInfoCard
              key={item.id}
              title={item.source}
              icon={item.icon}
              date={moment(item.date).format("Do MMM YYYY")}
              amount={item.amount}
              type="income"
              hideDeleteBtn
            />
          ))}
        </div>
      }
    </div>
  );
};

export default RecentIncome;
