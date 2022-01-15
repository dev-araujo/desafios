import styled from "styled-components";


export const CardBoxList = styled.div`
  margin-top: -1rem;
  h6 {
    font-size: 8px;
    opacity: 0.5;
    letter-spacing: 0.46em;
  }
  @media screen and (max-width: 380px) {
    margin-left: 1.2rem;
    margin-right: 1.2rem;
    height: 300px;
  }
`;

export const CardList = styled.div`
  height: 208px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 380px) {
    height: 268px;
  }
`;

export const Episode = styled.div`
  width: 405px;
  height: 80px;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  cursor: pointer;
  img {
    width: 5rem;
    height: 5rem;
    border-radius: 5%;
  }
  article {
    margin-left: 0.4rem;
    width: 300px;
  }
  h3 {
    font-size: 14px;
  }
  h5 {
    font-size: 12px;
    opacity: 0.5;
  }

  @media screen and (max-width: 380px) {
    width: 320px;
    height: 94px;
    margin-bottom: 0;
    img {
      min-width: 4rem;
      min-width: 4rem;
    }
    h5 {
      margin-top: -0.8rem;
    }
    article {
      width: 240px;
      margin-left: 0.8rem;
      word-wrap: break-word;
      display: block;
      margin-top: auto;
      margin-bottom: auto;
    }
  }
`;
