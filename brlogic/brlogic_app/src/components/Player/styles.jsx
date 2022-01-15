import styled from "styled-components";

import * as Color from "../../styles/colors";

export const PlayerBox = styled.div`
  height: 200px;
  width: 768px;
  margin-top: -4rem;

  .rhap_container {
    background: ${Color.player};
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
    padding-right: 8px;
  }
  .rhap_progress-section {
    width: 500px;
    display: flex;

    justify-content: space-between;
    align-items: center;
    margin-right: 1rem;
  }

  .rhap_progress-bar {
    background: ${Color.lightSecondary};
  }

  .rhap_progress-indicator {
    width: 400px !important;
  }

  .rhap_progress-filled {
    background: white;
    height: 4px;
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
    border: none;
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
    fill: ${Color.lightSecondary};
    cursor:pointer;
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
    color: ${Color.lightSecondary};
    border: none;
    cursor:pointer;
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
    background: ${Color.player};
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
