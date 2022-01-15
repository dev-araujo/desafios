import styled from "styled-components";
import * as Color from "../../styles/colors";

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
export const BoxTitle = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    padding-left: 3rem;
  }
  span {
    margin-right: 1rem;
    background: ${Color.dark};
    padding: 6px;
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
export const BoxHeader = styled.div`
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

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
  color: ${Color.lightSecondary};
`;
