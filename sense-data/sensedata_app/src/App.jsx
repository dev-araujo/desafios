import GlobalState from "./context/GlobalState";
import Routing from "./routes/routes";

function App() {
  return (
    <GlobalState>
      <Routing />
    </GlobalState>
  );
}

export default App;
