import { Routes, Route, BrowserRouter } from "react-router-dom";
import {Home,Login,Error} from '../pages/index'

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routing;
