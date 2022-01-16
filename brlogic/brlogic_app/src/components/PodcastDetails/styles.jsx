import styled from "styled-components";
import * as Color from "../../styles/colors";

import ShowMoreText from "react-show-more-text";

export const BoxContainerDetails = styled.div`
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 540px) {
    height: 666px;
    width: 100vw;
    justify-content: flex-start;
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
  @media screen and (max-width: 540px) {
    flex-direction: column-reverse;
    h1 {
      display: none;
    }
    span {
      position: fixed;
      top: 0;
      margin-top: 0.5rem;
      align-self: end;
    }
  }
`;
export const BoxHeader = styled.div`
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 540px) {
    flex-direction: column;
    justify-content: flex-start;
    height: 560px;
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
  @media screen and (max-width: 540px) {
    width: 100%;
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
  height: 250px;
  padding: 1rem;
  h6 {
    font-size: 11px;
    font-style: italic;
    opacity: 0.5;
  }
  @media screen and (max-width: 540px) {
    width: 330px;
    height: 280px;
    text-align: left;
    h1 {
      font-size: 14px;
    }
    h6 {
      margin-top: 15px;
    }
  }
`;

export const AboutPodcast = styled(ShowMoreText)`
  
  margin-top:-8px;
  max-height:140px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;

  }

  @media screen and (max-width: 540px) {
    height:20rem;
    margin-top:0px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;

  }
`;
export const ShowMoreLess = styled.p`
  margin-top: 0;
  font-size: 12px;
  font-style: italic;
  font-weight: 600;
  color: ${Color.lightSecondary};
`;
