import styled from "styled-components";
import cover from "../../assets/cover.jpeg";

export const CardHeader = styled.div`
  width: 315px;
  height: 418px;
  background: linear-gradient(
      180deg,
      rgba(68, 68, 68, 0) 60%,
      rgba(68, 68, 68, 0.72) 100%
    ),
    url(${cover});
  background-repeat: no-repeat;
  background-size: 325px 418px;
  border-top-left-radius: 3%;
  border-bottom-left-radius: 3%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  @media screen and (max-width: 380px) {
    width: 375px;
    height: 50%;
    background-size: 500px 332px;
    background-position: -3.5rem;
    border-radius: 0;
  }
`;

export const CardHeaderText = styled.div`
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  margin-left: 1.5rem;
  margin-bottom: 1rem;
  font-family: Raleway;
  font-weight: bolder;
  line-height: 0;
  & h3 {
    font-style: italic;
    font-size: 2rem;
  }
  & h4 {
    font-size: 1rem;
  }
`;
