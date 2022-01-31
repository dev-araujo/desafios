import axios from "axios";
import { goToInitial } from "../routes/coordinator";

export const authentication = (data, navigate) => {
  const Auth = "https://auth.dev-araujo.repl.co/auth/login";
  axios
    .post(`${Auth}`, data)
    .then((response) => {
      localStorage.setItem("access_token", response.data.access_token);
      goToInitial(navigate);
    })
    .catch(() => {
      alert("algo inesperado ocorreu");
    });
};

export const exit = () => {
  if (window.confirm("Certeza?")) {
    localStorage.removeItem("access_token");
    window.location.reload(false);
  }
};

export const userLogin = (event, history, state) => {
  const body = {
    email: state.email,
    password: state.password,
  };

  authentication(body, history);
  event.preventDefault();
};
