import { useNavigate } from "react-router";
import { useEffect } from "react";
import { goToLogin } from "../routes/coordinator";

const useProtectPage = () => {
  const history = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      goToLogin(history);
    }
  }, [history]);
};

export default useProtectPage;
