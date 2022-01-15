import React, { useEffect, useState, useCallback } from "react";
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios";

const GlobalState = (props) => {
  const BASE_URL = "https://api-frontend-test.brlogic.com/podcast/details.json";
  const [dataPodcast, setDataPodcast] = useState({
    about: "",
    episodes: [],
  });
  const [podcast, setPodcast] = useState({
    play: false,
    about: [],
    
  });

  const getInformation = useCallback(() => {
    axios.get(`${BASE_URL}`).then((response) => {
      setDataPodcast({
        ...dataPodcast,
        episodes: response.data.episodes,
        about: response.data.description,
      });
    });
  });

  useEffect(() => {
    getInformation();
  }, [setDataPodcast]);

  const data = { dataPodcast, podcast, setPodcast };
  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
