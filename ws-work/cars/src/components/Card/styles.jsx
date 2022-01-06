import styled from "styled-components";

export const Container = styled.main`
  height: 18rem;
  width: 14rem;
  margin-top: 2rem;
  margin-right: 2rem;
  box-shadow: 0 0 10px gray;
  transition: transform 100mx ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  cursor: pointer;
`;

export const Top = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.section`
  height: 16rem;
  padding: 0 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  li {
    display: flex;
  }
`;

export const BrandName = styled.p`
  font-weight: 800;
  font-size: 22px;
  text-align: left;
  color: #12425c;
  margin-bottom:0.5rem;
`;

export const SubTitle = styled.p`
  color: #8e9ea8;
  margin-right:4px;
`;

export const MoneyValue = styled.p`
  color: #128b63;
  font-weight: 700;
`;
export const BoxFlex = styled.article`
  width: 12rem;
  display: flex;
  justify-content: space-between;

  section:nth-child(2) {
    text-align: right;
  }
`;

export const Registered = styled.p`
  font-style: italic;
  font-size: 12px;
  margin-top: 4px;
  color: #2a5972;
  font-weight: 600;
`;
export const Information = styled.p`
  font-style: italic;
  color: #2a5972;
  font-weight: 600;
`;
