import React, { createContext, useState } from "react";

export const GlobalStateContext = createContext();

export default function GlobalState({ children }) {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [active, setActive] = useState({
    dashboard: "inactive",
    new: "inactive",
    list: "inactive",
    card: "inactive",
  });

  const data = {
    login,
    setLogin,
    active,
    setActive,
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {children}
    </GlobalStateContext.Provider>
  );
}
