import React, { useState, createContext , useEffect } from "react";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const updateUser = (userData) => {
        setUser(userData);
        localStorage.setItem("user",JSON.stringify(userData))
    }
    const clearUser = () => {
        setUser(null);
    }
    useEffect(()=>{
       const storedUser = localStorage.getItem(JSON.parse(user));
       setUser(storedUser);
      },[])
    return (
        <UserContext.Provider
            value={{
                user,
                updateUser,
                clearUser
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider;