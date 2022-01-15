import { useContext } from "react";
import GlobalStateContext from "./../../global/GlobalStateContext";
import * as S from "./styles";

const Header = () => {
  const { dataPodcast } = useContext(GlobalStateContext);
  return (
    <S.CardHeader>
      <S.CardHeaderText>
        <h3>Podlogic</h3>
        <h4>{dataPodcast.episodes.length} episódios</h4>
      </S.CardHeaderText>
    </S.CardHeader>
  );
};
export default Header;
