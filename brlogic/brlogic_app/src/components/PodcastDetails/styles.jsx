import styled from "styled-components";
import {
  playerColor,
  lightColorSecondary,
  lightColorDefault,
} from "../../styles/colors";
import ShowMoreText from "react-show-more-text";

export const BoxContainerDetails = styled.div`
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 380px) {
    height: 666px;
    width: 100vw;
  }
`;

export const BoxHeader = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 380px) {
    flex-direction: column;
    height: 543px;
  }
`;

export const BoxImage = styled.div`
  width: 277px;
  img {
    width: 250px;
    height: 250px;
    padding: 2rem;
    border-radius: 15%;
  }
  @media screen and (max-width: 380px) {
    img {
      width: 375px;
      height: 264px;
      padding: 0;
      border-radius: 0;
    }
  }
`;

export const BoxTextRight = styled.div`
  width: 440px;
  height: 240px;
  padding: 1rem;
  h6 {
    font-size: 11px;
    font-style: italic;
    opacity: 0.5;
  }
  @media screen and (max-width: 380px) {
    width: 330px;
    height: 280px;
    text-align: left;
    h1 {
      font-size: 14px;
    }
  }
`;

export const AboutPodcast = styled(ShowMoreText)`
  height: 120px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const ShowMoreLess = styled.p`
  margin-top: 0;
  font-size: 14px;
  font-style: italic;
  font-weight: 600;
  color: ${lightColorDefault};
`;

export const PlayerBox = styled.div`
  height: 200px;
  width: 768px;

  .rhap_container {
    background: ${playerColor};
    height: 100px;
    border-bottom-right-radius: 3%;
    border-bottom-left-radius: 3%;
    display: flex;
    justify-content: flex-end;
  }
  .rhap_main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .rhap_main-controls {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .rhap_progress-section {
    width: 500px;
    display: flex;

    justify-content: space-between;
    align-items: center;
    margin-right: 1rem;
  }

  .rhap_progress-bar,
  .rhap_progress-bar-show-download {
    background: ${lightColorSecondary};
    width: 400px !important;
    height: 4px;
    opacity: 0.3;
  }

  .rhap_time {
    color: white;
    opacity: 0.5;
  }

  .rhap_repeat-button,
  .rhap_volume-container {
    display: none;
  }
  .rhap_play-pause-button {
    font-size: 64px;
    width: 54px;
    height: 54px;
    border-radius: 100%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .rhap_play-pause-button path {
    fill: ${lightColorSecondary};
  }
  .rhap_skip-button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: white;
    color: ${lightColorSecondary};
  }
  .rhap_forward-button {
    margin-left: 0.5rem;
  }
  .rhap_rewind-button {
    margin-right: 0.5rem;
  }
  @media screen and (max-width: 380px) {
    width: 375px;
    height: 220px;
    background: ${playerColor};
    .rhap_time {
      font-size: 12px;
    }
    .rhap_stacked {
      width: 320px;
      height: 220px;
      padding: 0.5rem;
      padding-bottom: 1.5rem;
      flex-direction: column;
      justify-content: center;
    }
  }
`;
