import { useState, useEffect } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const data = {};
  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
