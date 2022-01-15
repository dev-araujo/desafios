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
    cursor: pointer;
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
    cursor: pointer;
  }
  .rhap_forward-button {
    margin-left: 0.5rem;
  }
  .rhap_rewind-button {
    margin-right: 0.5rem;
  }
  @media screen and (max-width: 540px) {
    min-height: 200px;
    width: 375px;
    margin-top: -8rem;
    background: ${Color.player};
    display: flex;
    justify-content: center;

    .rhap_time {
      font-size: 12px;
    }

    .rhap_stacked {
      flex-direction: column;
      align-items: center;
    }

    .rhap_main-controls,
    .rhap_progress-section {
      padding-right: 0;
      margin-right: 0;
    }

    .rhap_progress-section {
      margin-top: 1rem;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .rhap_total-time {
      margin-right: 1rem;
      margin-left: 0.5rem;
    }
    .rhap_current-time {
      margin-left: 1rem;
      margin-right: 0.5rem;
    }

    .rhap_progress-indicator {
      max-width: 280px;
    }
  }
`;
