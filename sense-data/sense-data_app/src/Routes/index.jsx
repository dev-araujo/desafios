import { Routes as Router, Route, HashRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Error from "../pages/Error";

const Routes = () => {
  return (
    <HashRouter>
      <Router>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Router>
    </HashRouter>
  );
};
export default Routes;
