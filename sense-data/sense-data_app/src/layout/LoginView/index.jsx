import { SignIn } from "../../components";
import * as S from "./styles";

function LoginView() {
  return (
    <S.Container>
      <S.Wallpaper></S.Wallpaper>
      <SignIn />
    </S.Container>
  );
}

export default LoginView;
