import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.section`
  background: ${colors.colorSidebar};

  color: ${colors.text};

  width: 16vw;
  height: 92vh;
  padding: 2rem 0.5rem 0;
  border-radius: 1%;
  margin: 1rem 0 0 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
