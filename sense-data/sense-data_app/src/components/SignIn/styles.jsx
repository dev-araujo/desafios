import styled from "styled-components";
import { colors } from "../../styles/colors";
import TextField from "@material-ui/core/TextField";

export const Input = styled(TextField)`
  max-width: 340px;
`;

export const FormContainer = styled.form`
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 870px) {
    width: 100%;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    color: ${colors.colorToGradient};
    font-weight: bolder;
  }
`;

export const LoginButton = styled.button`
  width: 340px;
  padding: 8px;
  border: none;
  border-radius: 2%;
  background: ${colors.primary};
  color: white;
  font-weight: bolder;
  &:hover {
    background: ${colors.secondary};
  }
`;
