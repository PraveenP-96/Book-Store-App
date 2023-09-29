import React, { createContext, useContext } from 'react';
import Cookies from 'js-cookie';

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {

  const login = (loggedIn, Admin, email) => {

    Cookies.set("isLoggedIn", loggedIn);
    Cookies.set("isAdmin", Admin);
    Cookies.set("email", email);
    //console.log(loggedIn, Admin);
    //window.location.reload();
  };

  const logout = () => {
    Cookies.remove("isLoggedIn");
    Cookies.remove("isAdmin");
    Cookies.remove("email");
    //window.location.reload();
  };

  return (
    <UserContext.Provider value={{login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
