import { useContext } from "react";
import GlobalStateContext from "../../context/GlobalStateContext";
import { Container, SearchInput, ButtonContainer, ButtonAdd } from "./styles";

const SearchBar = ({ callFunction }) => {
  const { search, setSearch } = useContext(GlobalStateContext);

  return (
    <Container>
      <h1>Bem vindo!</h1>
      <p>Aqui você pode pesquisar e adicionar novos carros!</p>
      <section>
        <SearchInput
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type={"search"}
          placeholder={"sugestões: marca, nome, valor..."}
        />

        <nav>
          <span
            value={""}
            onClick={() => {
              setSearch("");
            }}
          >
            TODOS
          </span>
          <span
            value={"FORD"}
            onClick={() => {
              setSearch("FORD");
            }}
          >
            FORD
          </span>
          <span
            value={"VW"}
            onClick={() => {
              setSearch("VW");
            }}
          >
            VW
          </span>
          <span
            value={"TOYOTA"}
            onClick={() => {
              setSearch("TOYOTA");
            }}
          >
            TOYOTA
          </span>
          <span
            value={"FIAT"}
            onClick={() => {
              setSearch("FIAT");
            }}
          >
            FIAT
          </span>
        </nav>
        <ButtonContainer>
          Adicione um novo carro: <ButtonAdd id={'addIcon'} onClick={callFunction} />
        </ButtonContainer>
      </section>
    </Container>
  );
};
export default SearchBar;
