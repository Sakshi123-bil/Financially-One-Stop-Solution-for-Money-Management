import React from "react";
import { ImSpinner2 } from "react-icons/im";
const InfoCard = ({ icon, label, value, color, loading }) => {
    return (
        <div className="flex gap-6 bg-white rounded-2xl shadow-md shadow-gray-100 border border-gray-200/50 p-2">
            {loading ?
            <div className="flex items-center justify-center h-full w-full">
                <ImSpinner2 className="text-purple-500 animate-spin" size={32} />
            </div> : <>
            <div className={`w-14 h-14  flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}>
                    {icon}
                </div>
                <div>
                    <h6 className="text-sm text-gray-500 mb-1">{label}</h6>
                    <span className="text-[22px]">${value}</span>
            </div></>
            }

        </div>
    )
}

export default InfoCard;