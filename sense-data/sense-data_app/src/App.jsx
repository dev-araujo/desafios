import Routes from "./Routes";
import GlobalState from "./context/GlobalState";
/*
{	"email": "sense@data.com",
 	"password": "testando123"
 }
*/
function App() {
  return (
    <GlobalState>
      <Routes />
    </GlobalState>
  );
}

export default App;
