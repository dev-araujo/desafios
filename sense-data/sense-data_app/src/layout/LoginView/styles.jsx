import styled from "styled-components";
import WallpaperLogin from "../../assets/wallpaper_login.jpg";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: row;
  @media (max-width: 870px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
export const Wallpaper = styled.section`
  background: url(${WallpaperLogin});
  background-size: cover;
  width: 60vw;
  @media (max-width: 870px) {
    display: none;
  }
`;
