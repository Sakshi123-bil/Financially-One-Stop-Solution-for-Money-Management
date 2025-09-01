import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

const DashboardLayout = ({ children, activeMenu }) => {
  const {user} = useContext(UserContext);
  console.log(user?.fullName);
  return (
    <div className="">
      <Navbar activeMenu={activeMenu} />
      <div>
      {user && (
        <div className="flex">
          <div className="max-[1080px]:hidden">
            <SideMenu activeMenu={activeMenu} />
          </div>

          <div className="grow mx-5">{children}</div>
        </div>
      )}
      </div>
    </div>
  );
};

export default DashboardLayout;
