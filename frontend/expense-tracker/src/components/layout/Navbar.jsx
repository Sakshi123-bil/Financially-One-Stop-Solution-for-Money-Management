import React, { useState , useContext } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SideMenu from "./SideMenu";
import { SIDE_MENU_DATA } from "../../utils/data";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleClick = (route) => {
    if (route === "/logout") {
      handleLogout();
      return;
    }
    navigate(route);
  }
  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/login")
  }
  return (
    <div className="flex gap-5 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-7 sticy top-0  z-30">
      <button
        className="block lg:hidden text-black"
        onClick={() => setOpenSideMenu(!openSideMenu)}
      >
        {openSideMenu ? (
          <HiOutlineX className="text-2xl" />
        ) : (
          <HiOutlineMenu className="text-2xl" />
        )}
      </button>
     <div className="flex justify-between items-center w-full">
      <div>
      <h2 className="text-lg font-medium text-black">Expense Tracker</h2>
      </div>
      <div className="hidden lg:flex items-center gap-6">
        {SIDE_MENU_DATA.map((item, index) => (
          <button
            key={`nav_${index}`}
            className={`flex items-center gap-2 text-[15px] px-3 py-2 rounded-md transition 
              ${activeMenu === item.label
                ? "text-white bg-primary"
                : "text-gray-700 hover:bg-gray-200"
              }`}
            onClick={() => handleClick(item.path)}
          >
            <item.icon className="text-lg" />
            {item.label}
          </button>
        ))}
      </div>
      </div>

      {openSideMenu && (
        <div className="fixed top-[61px] -ml-4 bg-white">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )
      }
    </div>
  );
};

export default Navbar;
