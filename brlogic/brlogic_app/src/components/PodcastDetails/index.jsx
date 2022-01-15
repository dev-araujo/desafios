import { useContext } from "react";
import GlobalStateContext from "./../../global/GlobalStateContext";
import { participantsSeparation } from "../../utils/participantsSeparation";

import * as S from "./styles";

function PodcastDetails() {
  const { podcast, setPodcast } = useContext(GlobalStateContext);

  return (
    <S.BoxContainerDetails>
      <S.BoxTitle>
        <h1>{podcast.about.name}</h1>{" "}
        <span onClick={() => setPodcast({ ...podcast, play: !podcast.play })}>
          X
        </span>
      </S.BoxTitle>
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
          <h6>
            Participantes: {participantsSeparation(podcast.about.participants)}
          </h6>
        </S.BoxTextRight>
      </S.BoxHeader>
    </S.BoxContainerDetails>
  );
}

export default PodcastDetails;
