import GlobalState from "./context/GlobalState";
import Layout from "./layout";

function App() {
  return (
    <GlobalState>
      <Layout />
    </GlobalState>
  );
}

export default App;
