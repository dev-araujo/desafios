import { SignIn } from "./../../components/index";
import "./styles.scss";

function LoginLayout() {
  return (
    <main className={"login"}>
      <section className={"login__wallpaper"}></section>
      <SignIn />
    </main>
  );
}

export default LoginLayout;
