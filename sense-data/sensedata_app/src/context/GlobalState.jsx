import React, { createContext, useState } from "react";

export const GlobalStateContext = createContext();

export default function GlobalState({ children }) {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const data = {
    login,
    setLogin,
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {children}
    </GlobalStateContext.Provider>
  );
}
