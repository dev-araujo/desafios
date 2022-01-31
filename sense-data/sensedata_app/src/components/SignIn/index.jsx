import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../../context/GlobalState";

import { Button, TextField } from "../../libs";
import { userLogin } from "../../services/auth";
import { Logo } from "../../assets";

import "./styles.scss";

const SignIn = () => {
  const history = useNavigate();

  const { login, setLogin } = useContext(GlobalStateContext);

  const send = (event) => {
    return userLogin(event, history, login);
  };

  return (
    <form className={"form"} onSubmit={send}>
      <img src={Logo} alt={"senseData icon"} />

      <TextField
        className={"form__input"}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        type={"email"}
        label={"E-mail"}
        value={login.email}
        onChange={(event) => setLogin({ ...login, email: event.target.value })}
      />
      <TextField
        className={"form__input"}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        type={"password"}
        label={"Senha"}
        value={login.password}
        onChange={(event) =>
          setLogin({ ...login, password: event.target.value })
        }
      />

      <Button className={"form__button"} type="submit" variant="contained">
        Entrar
      </Button>
    </form>
  );
};
export default SignIn;
