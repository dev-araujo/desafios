import styled from "styled-components";
import TextField from "@mui/material/TextField";

import Select from "@mui/material/Select";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 500px;
  height: 100vh;

  @media (max-width: 470px) {
    width: 360px;
    max-width: 380px;
  }
`;

export const TopContent = styled.header`
  width: 100%;
  height: 24vh;
  background: #9b9be4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;

  h1 {
    font-size: 2rem;
    color: #0c3b55;
  }
`;
export const Content = styled.div`
  margin-top: -4rem;
  height: 44vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 470px) {
    width: 280px;
    max-width: 300px;

    height: 50vh;
  }
`;

export const FormColumns = styled.section`
  display: flex;
  justify-content: space-between;
  input {
    max-width: 164px;
  }

 
`;

export const OptionsSelect = styled(Select)`
  min-width: 192px;
 
`;

export const FormStart = styled.section`
  width: 400px;
  display: flex;
  align-items: flex-start;
  input {
    max-width: 164px;
  }
`;
export const Input = styled(TextField)`
  @media (max-width: 450px) {
    margin-bottom: 8rem;
  }
`;

export const Action = styled.footer`
  width: 400px;
  height: 10vh;
  display: flex;
  justify-content: flex-end;
  button {
    margin-bottom: 2rem;
  }
  @media (max-width: 470px) {
    max-width: 300px;
  }
`;
