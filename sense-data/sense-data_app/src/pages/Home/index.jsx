import { HomeView } from "../../layout/index";
import useProtectPage from './../../hooks/useProtectPage';

function Home() {
  useProtectPage();
  return <HomeView />;
}

export default Home;
