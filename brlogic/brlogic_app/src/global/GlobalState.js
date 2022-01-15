import React, { useEffect, useState, useCallback } from "react";
import GlobalStateContext from "./GlobalStateContext";
import { api_getData } from "./../services/api";

const GlobalState = (props) => {
  const [dataPodcast, setDataPodcast] = useState({
    about: "",
    episodes: [],
  });
  const [podcast, setPodcast] = useState({
    play: false,
    about: [],
  });

  const getInformation = useCallback(() => {
     api_getData(setDataPodcast, dataPodcast);
  }, [dataPodcast]);

  useEffect(() => {
    getInformation();
  }, [getInformation]);

  const data = { dataPodcast, podcast, setPodcast };
  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
