import React, { createContext, useState } from "react";

export const GlobalStateContext = createContext();

export default function GlobalState({ children }) {
  const [open, setOpen] = useState({
    about: false,
    addModal: false,
    editModal: false,
    inOut: "inflow",
    view: "grid",
  });

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const data = {
    login,
    setLogin,
    open,
    setOpen,
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {children}
    </GlobalStateContext.Provider>
  );
}
