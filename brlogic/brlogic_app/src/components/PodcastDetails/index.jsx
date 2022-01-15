import { useContext } from "react";
import GlobalStateContext from "./../../global/GlobalStateContext";
import AudioPlayer from "react-h5-audio-player";
import { previousPodcast, nextPodcast } from "../../utils/playerControls";

import axios from "axios";
import * as S from "./styles";

function PodcastDetails() {
  const { podcast, setPodcast, dataPodcast } = useContext(GlobalStateContext);

  const idList = dataPodcast.episodes.map((ep) => {
    return ep.id;
  });

  const getRandomPodcast = (id) => {
    const BASE_URL = "https://api-frontend-test.brlogic.com/podcast/";

    axios
      .get(`${BASE_URL}episodes/${id}/details.json`)
      .then((response) => {
        setPodcast({ ...podcast, about: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <S.BoxContainerDetails>
      <h1>{podcast.about.name}</h1>
      <S.BoxHeader>
        <S.BoxImage>
          <img src={podcast.about.cover} alt={podcast.about.description} />
        </S.BoxImage>

        <S.BoxTextRight>
          <h1>
            Episódio {podcast.about.episodeNumber} - {podcast.about.name}
          </h1>
          <S.AboutPodcast
            lines={4}
            more={<S.ShowMoreLess>Ler mais </S.ShowMoreLess>}
            less={<S.ShowMoreLess>Ler menos</S.ShowMoreLess>}
            expanded={false}
          >
            <p>{podcast.about.description}</p>
          </S.AboutPodcast>
          <h6>Participantes: {podcast.about.participants}</h6>
        </S.BoxTextRight>
      </S.BoxHeader>

      <S.PlayerBox>
        <AudioPlayer
          src={podcast.about.audio}
          onPlay={(e) => console.log("play works")}
          showSkipControls={true}
          onClickNext={() =>
            getRandomPodcast(
              nextPodcast(idList, podcast.about.episodeNumber - 1)
            )
          }
          onClickPrevious={() =>
            getRandomPodcast(
              previousPodcast(idList, podcast.about.episodeNumber - 1)
            )
          }
          showJumpControls={false}
        />
      </S.PlayerBox>
    </S.BoxContainerDetails>
  );
}

export default PodcastDetails;
