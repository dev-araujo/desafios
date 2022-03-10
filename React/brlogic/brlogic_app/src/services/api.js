import axios from "axios";

export const api_getRandomPodcast = (id, setState, state) => {
  const BASE_URL = "https://api-frontend-test.brlogic.com/podcast/episodes/";

  return axios
    .get(`${BASE_URL}${id}/details.json`)
    .then((response) => {
      setState({ ...state, about: response.data });
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const api_getOpenEpisode = (id, setState, state) => {
  const BASE_URL = "https://api-frontend-test.brlogic.com/podcast/episodes/";

  if (id !== undefined) {
    return axios
      .get(`${BASE_URL}${id}/details.json`)
      .then((response) => {
        setState({ ...state, about: response.data, play: !state.play });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
};

export const api_getData = (setState, state) => {
  const BASE_URL = "https://api-frontend-test.brlogic.com/podcast/details.json";
  axios.get(`${BASE_URL}`).then((response) => {
    setState({
      ...state,
      episodes: response.data.episodes,
      about: response.data.description,
    });
  });
  
}
