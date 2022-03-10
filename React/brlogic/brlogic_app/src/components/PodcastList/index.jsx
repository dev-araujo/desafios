import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { api_getOpenEpisode } from "../../services/api";
import convertHours from "../../utils/convertHours";
import * as S from "./styles";

function PodcastList() {
  const { dataPodcast, podcast, setPodcast } = useContext(GlobalStateContext);

  return (
    <S.CardBoxList>
      <section>
        <h6>LISTA DE EPISÓDIOS</h6>
        <S.CardList>
          {dataPodcast.episodes.map((ep) => {
            return (
              <S.Episode
                key={ep.id}
                onClick={() => {
                  api_getOpenEpisode(ep.id, setPodcast, podcast);
                }}
              >
                <img src={ep.cover} alt={ep.description} />

                <article>
                  <h3>
                    Episódio {ep.episodeNumber}- {ep.name}
                  </h3>
                  <h5>{convertHours(ep.duration)}</h5>
                </article>
              </S.Episode>
            );
          })}
        </S.CardList>
      </section>
    </S.CardBoxList>
  );
}

export default PodcastList;
