import { useContext } from "react";
import GlobalStateContext from "../context/GlobalStateContext";
import { filter } from "./../utils/filter";
import { Card, SearchBar, NewCar } from "../components/index";
import { Container, Content } from "./styles";

function Layout() {
  const { cars, search, open, setOpen } = useContext(GlobalStateContext);
  const carList = filter(search, cars);

  return (
    <Container>
      <NewCar open={open} callFunction={() => setOpen(false)} />
      <SearchBar callFunction={() => setOpen(true)} />
      <Content>
        {carList.map((car) => {
          return <Card data={car} />;
        })}
      </Content>
    </Container>
  );
}

export default Layout;
