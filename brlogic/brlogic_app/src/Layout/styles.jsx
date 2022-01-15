import styled from "styled-components";

import * as Color from "../styles/colors";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${Color.dark};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Card = styled.section`
  width: 768px;
  height: 418px;
  border-radius: 3%;
  background-color: ${Color.base};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 380px) {
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    border-radius: 0;
  }
`;

export const Box = styled.div`
  width: 453px;
  padding: 1rem;
  @media screen and (max-width: 380px) {
    padding: 0;
    width: 100vw;
  }
`;

export const FooterCard = styled.footer`
  display: flex;
  flex-direction: column;
`;
