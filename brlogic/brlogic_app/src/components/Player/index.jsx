import { useContext } from "react";
import GlobalStateContext from "./../../global/GlobalStateContext";
import { previousPodcast, nextPodcast } from "../../utils/playerControls";
import axios from "axios";
import AudioPlayer from "react-h5-audio-player";
import * as S from "./styles";

function Player() {
  const { podcast, setPodcast, dataPodcast } = useContext(GlobalStateContext);

  const idList = dataPodcast.episodes.map((ep) => {
    return ep.id;
  });

  const getRandomPodcast = (id) => {
    const BASE_URL = "https://api-frontend-test.brlogic.com/podcast/episodes/";

    axios
      .get(`${BASE_URL}${id}/details.json`)
      .then((response) => {
        setPodcast({ ...podcast, about: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <S.PlayerBox>
      <AudioPlayer
        src={podcast.about.audio}
        onPlay={() => console.log("play works")}
        showSkipControls={true}
        onClickNext={() =>
          getRandomPodcast(nextPodcast(idList, podcast.about.episodeNumber - 1))
        }
        onClickPrevious={() =>
          getRandomPodcast(
            previousPodcast(idList, podcast.about.episodeNumber - 1)
          )
        }
        showJumpControls={false}
      />
    </S.PlayerBox>
  );
}

export default Player;
