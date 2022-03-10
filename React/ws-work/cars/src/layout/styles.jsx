import styled from "styled-components";

export const Container = styled.main`
  width: 90vw;
  height: auto;
  padding: 2rem;
  padding-top:4rem;
`;
export const Content = styled.div`
  margin-top:4rem;
  width: 88vw;
  height: auto;
  display: flex;
  justify-content:flex-start;
  flex-wrap: wrap;


  @media (max-width: 900px) {
    justify-content:center;
    }
    @media (max-width: 470px) {
      margin-top:8rem;
      margin-left:1rem;
    }
`;
