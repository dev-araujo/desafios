import { HomeLayout } from "../../layout/index";
import useProtectedPage from "../../hooks/useProtectedPage";
function Home() {
  useProtectedPage();
  return <HomeLayout />;
}

export default Home;
