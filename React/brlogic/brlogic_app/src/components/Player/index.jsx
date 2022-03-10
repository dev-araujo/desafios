import { useContext } from "react";
import GlobalStateContext from "./../../global/GlobalStateContext";
import { api_getRandomPodcast } from "../../services/api";
import { previousPodcast, nextPodcast } from "../../utils/playerControls";
import AudioPlayer from "react-h5-audio-player";
import * as S from "./styles";

function Player() {
  const { podcast, setPodcast, dataPodcast } = useContext(GlobalStateContext);

  const idList = dataPodcast.episodes.map((ep) => {
    return ep.id;
  });

  return (
    <S.PlayerBox>
      <AudioPlayer
        src={podcast.about.audio}
        onPlay={() => console.log("play works")}
        showSkipControls={true}
        onClickNext={() =>
          api_getRandomPodcast(
            nextPodcast(idList, podcast.about.episodeNumber - 1),
            setPodcast,
            podcast
          )
        }
        onClickPrevious={() =>
          api_getRandomPodcast(
            previousPodcast(idList, podcast.about.episodeNumber - 1),
            setPodcast,
            podcast
          )
        }
        showJumpControls={false}
      />
    </S.PlayerBox>
  );
}

export default Player;
