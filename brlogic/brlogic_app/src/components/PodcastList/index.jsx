import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import convertHours from "../../utils/convertHours";
import axios from "axios";
import * as S from "./styles";

function PodcastList() {
  const { dataPodcast, podcast, setPodcast } = useContext(GlobalStateContext);
  
  const openEpisode = (id) => {
  
    const BASE_URL = "https://api-frontend-test.brlogic.com/podcast/";

    // setPodcast({ ...podcast, play: true });

    if (id !== undefined) {
      return axios
        .get(`${BASE_URL}episodes/${id}/details.json`)
        .then((response) => {
          setPodcast({ ...podcast, about: response.data, play: true });
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  return (
    <S.CardBoxList>
      <section>
        <h6>LISTA DE EPISÓDIOS</h6>
        <S.CardList>
          {dataPodcast.episodes.map((ep) => {
            return (
              <S.Episode
                key={ep.id}
                onClick={()=>{openEpisode(ep.id)}}>
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
