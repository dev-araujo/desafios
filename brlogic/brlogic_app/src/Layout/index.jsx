import { useContext } from "react";
import GlobalStateContext from "../global/GlobalStateContext";
import { Header, About, PodcastDetails, PodcastList } from "../components";
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
          <PodcastDetails />
        )}
      </S.Card>
    </S.Container>
  );
}

export default Layout;
