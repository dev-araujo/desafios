import { useContext } from "react";
import GlobalStateContext from "../global/GlobalStateContext";
import {
  Header,
  About,
  PodcastDetails,
  PodcastList,
  Player,
} from "../components";
import * as S from "./styles";

function Layout() {
  const { podcast } = useContext(GlobalStateContext);
  return (
    <S.Container>
      <S.Card>
        {podcast.play !== true ? (
          <>
            <Header />
            <S.Box>
              <About />
              <PodcastList />
            </S.Box>
          </>
        ) : (
          <S.PlayerCard>
            <PodcastDetails />
            <Player />
          </S.PlayerCard>
        )}
      </S.Card>
    </S.Container>
  );
}

export default Layout;
