import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user"); // ✅ Remove user data on logout
    }
  }, [user]);

  const login = (userData) => {
    setUser(userData); // ✅ Set user data after login
  };

  const updateUser = (updatedUser) => {
    setUser((prevUser) => ({ ...prevUser, ...updatedUser }));
  };

  const addOrder = (newOrder) => {
    setUser((prevUser) => ({
      ...prevUser,
      orders: prevUser.orders ? [...prevUser.orders, newOrder] : [newOrder],
    }));
  };

  const logout = () => {
    setUser(null); // ✅ Clear user state
    localStorage.removeItem("user"); // ✅ Clear from localStorage
  };

  return (
    <UserContext.Provider value={{ user, login, setUser, updateUser, addOrder, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
