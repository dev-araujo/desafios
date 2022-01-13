import GlobalState from "./global/GlobalState";
import Layout from "./Layout";
function App() {
  return (
    <GlobalState>
      <Layout />
    </GlobalState>
  );
}

export default App;
