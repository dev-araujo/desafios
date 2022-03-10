import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import * as S from "./styles";

const About = () => {
  const { dataPodcast } = useContext(GlobalStateContext);
  return (
    <S.CardAbout>
      <h6>SOBRE O PODCAST</h6>
      <S.AboutPodcast
        lines={4}
        more={<S.ShowMoreLess>Ler mais </S.ShowMoreLess>}
        less={<S.ShowMoreLess>Ler menos </S.ShowMoreLess>}
        expanded={false}
      >
        <span>{dataPodcast.about}</span>
      </S.AboutPodcast>
    </S.CardAbout>
  );
};

export default About;
