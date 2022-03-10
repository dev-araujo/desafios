import styled from "styled-components";
import AddNewIcon from "@mui/icons-material/AddBoxOutlined";

export const Container = styled.main`
  height: 10rem;
  width: 74vw;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 470px) {
      padding-top: 2rem;
      
    }

  h1 {
    font-size: 4rem;
  }
  h1,
  p {
    color: #01669c;
  }
  section {
    margin-top: 0.4rem;
    margin-right: 8px;
    padding-left: 2rem;
    min-height: 8rem;
    width: 82vw;
    border-radius: 16px;
    background: #d2d2ff;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 900px) {
      flex-direction: column;
      padding-left: 0;
      padding: 2rem;
    }
    @media (max-width: 470px) {
      padding: 1rem;
      align-items: center;
      justify-content: space-around;
    }

    nav {
      background: #cbcbf7;
      width: 28rem;
      padding: 2.8rem;
      cursor: pointer;
      display: flex;
      justify-content: space-around;

      @media (max-width: 900px) {
        padding: 0;
        background: none;
      }
      @media (max-width: 470px) {
        display: none;
      }

      span {
        color: #004b74;
        font-weight: 600;
        padding: 0.5rem;

        :first-child {
          text-decoration: underline;
        }
        :hover {
          background: #e2e2fa;
        }
      }
    }
  }
`;

export const SearchInput = styled.input`
  width: 22rem;
  height: 2.5rem;
  border: #cacaca 1px solid;
  padding: 6px;
  border-radius: 6px;
  color: #01669c;
  letter-spacing: 2px;

  @media (max-width: 470px) {
    width: 14rem;
  }

  ::-webkit-input-placeholder {
    color: #d8d8d8;
    letter-spacing: 1px;
  }
  :focus {
    outline: none;
    box-shadow: none;
  }
`;
export const ButtonContainer = styled.div`
  width: 14rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #004b74;

  #addIcon {
    font-size: 2rem;
  }
`;
export const ButtonAdd = styled(AddNewIcon)`
  color: #044466;
  margin-right: 1rem;
  cursor: pointer;

  :hover {
    filter: opacity(70%);
  }
`;
