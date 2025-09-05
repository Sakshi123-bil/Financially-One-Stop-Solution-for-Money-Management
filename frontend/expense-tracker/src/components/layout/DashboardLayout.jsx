import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext);
  console.log("User object:", user);           // full object
  console.log("User full name:", user.fullName); // specific property
  console.log("User email:", user.email);

  return (
    <div className="">
      <Navbar activeMenu={activeMenu} />
      <div>
        {user && (
          <div className="flex">
            <div className="max-[3000px]:hidden">
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
