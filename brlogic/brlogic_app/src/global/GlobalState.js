import React, { useEffect, useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios";

const GlobalState = (props) => {
  const BASE_URL = "https://api-frontend-test.brlogic.com/podcast/";
  const [dataPodcast, setDataPodcast] = useState({
    about: "",
    episodes: [],
  });

  const getInformation = () => {
    axios.get(`${BASE_URL}details.json`).then((response) => {
      setDataPodcast({ ...dataPodcast, episodes: response.data.episodes });
    });
  };

  useEffect(() => {
    getInformation();
  }, []);

  const data = { dataPodcast };
  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
