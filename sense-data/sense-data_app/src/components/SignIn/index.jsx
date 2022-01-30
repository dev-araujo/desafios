import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../../context/GlobalState";
import { userLogin } from "../../services/authentication";
import {Logo} from "../../styles/images";

import * as S from "./styles";

const SignIn = () => {
  const history = useNavigate();
  const { login, setLogin } = useContext(GlobalStateContext);

  const send = (event) => {
    return userLogin(event, history, login);
  };

  return (
    <S.FormContainer onSubmit={send}>
      <img src={Logo} alt={"senseData icon"} />

      <S.Input
        fullWidth
        autoFocus
        margin="normal"
        variant="outlined"
        element={"email"}
        label={"E-mail"}
        value={login.email}
        onChange={(event) => setLogin({ ...login, email: event.target.value })}
      />
      <S.Input
        fullWidth
        autoFocus
        margin="normal"
        variant="outlined"
        element={"password"}
        label={"Senha"}
        value={login.password}
        onChange={(event) =>
          setLogin({ ...login, password: event.target.value })
        }
        type={"password"}
      />

      <S.LoginButton
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Entrar
      </S.LoginButton>
    </S.FormContainer>
  );
};
export default SignIn;
