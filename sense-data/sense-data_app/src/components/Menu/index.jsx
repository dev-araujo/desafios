import { useContext } from "react";
import { GlobalStateContext } from "../../context/GlobalState";
import { exit } from "../../services/authentication";
// import { Header, About, Options } from "../index";

import * as S from "./styles";

function Menu() {
  const { open, setOpen } = useContext(GlobalStateContext);

  return (
    <S.Container>
      {/* <Header />
      <section>{open.about ? <About /> : <Options />}</section>
      <footer>
        <p onClick={() => setOpen({ ...open, about: !open.about })}>
          {open.about ? "Menu" : "Sobre"}
        </p>
        <p onClick={exit}>Sair</p>
      </footer> */}
    </S.Container>
  );
}

export default Menu;
