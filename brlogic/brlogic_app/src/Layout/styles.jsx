import styled from "styled-components";
import { darkColor, defaultColor } from "../styles/colors";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${darkColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Card = styled.section`
  width: 768px;
  height: 418px;
  border-radius: 3%;
  background-color: ${defaultColor};
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

export const BackPage = styled.button`
  width: 40px;
  height: 40px;
  float: right;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  margin-right: 0.5rem;
  border-radius: 100%;
  &:active {
    filter: contrast(50%);
  }
  @media screen and (max-width: 380px) {
    background-color: ${darkColor};
    position: fixed;
    left: 19.5rem;
    top: 1rem;
  }
`;