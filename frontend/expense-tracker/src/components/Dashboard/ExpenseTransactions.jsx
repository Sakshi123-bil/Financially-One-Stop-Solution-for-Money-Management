import { LuArrowRight } from "react-icons/lu";
import moment from "moment";
import TransactionInfoCard from "../Cards/TransactionInfoCard";
import { ImSpinner2 } from "react-icons/im";
const ExpenseTransactions = ({ transactions, onSeeMore, loading }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Expenses</h5>

        <button className={loading ? "card-btn-disable" : "card-btn"} onClick={onSeeMore}>
          See All <LuArrowRight className="text-base" />
        </button>
      </div>
      {
        loading ?
          <div className="flex items-center justify-center h-full w-full">
            <ImSpinner2 className="text-purple-500 animate-spin" size={32} />
          </div> : <div className="mt-6">
            {transactions?.slice(0, 5)?.map((expense) => (
              <TransactionInfoCard
                key={expense.id}
                title={expense.category}
                icon={expense.icon}
                date={moment(expense.date).format("Do MMM YYYY")}
                amount={expense.amount}
                type="expense"
                hideDeleteBtn
              />
            ))}
          </div>
      }

    </div>
  );
};
export default ExpenseTransactions;