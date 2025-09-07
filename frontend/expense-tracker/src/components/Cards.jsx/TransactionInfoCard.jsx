import { LuTrendingDown, LuTrendingUp } from "react-icons/lu";

const TransactionInfoCard = ({
  title,
  icon,
  date,
  amount,
  type,
  hideDeleteBtn,
}) => {
  return (
    <div className="group relative flex items-center gap-4 mt-2 p-3 border rounded-md">
      <div className="w-12 h-12 flex items-center justify-center text-center">
        {icon ? (
          <img src={icon} alt={title} className="w-6 h-6" />
        ) : (
          <LuUtensils />
        )}
      </div>

      <div className="flex-1">
        <div>
            <p className="">{title}</p>
            <p className="">{date}</p>
        </div>

        <div className="">
         {!hideDeleteBtn && (
            <button 
            className=""
            onClick={onDelete}
            >
            <LuTrash2 size={18}/>
            </button>
         )}

         <div className={`flex items-center gap-2 px-3 py-1.5 rounded-md`}>
           <h6>{type==="income" ? "+":"-"} ${amount}</h6>
           {type="income" ? <LuTrendingUp/> : <LuTrendingDown/>}
         </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionInfoCard;
