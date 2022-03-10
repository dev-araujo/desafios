import {
  Container,
  Content,
  BrandName,
  SubTitle,
  BoxFlex,
  Top,
  MoneyValue,
  Registered,
  Information,
} from "./styles";
import { formatDate } from "../../utils/formatDate";
import { currencyFormat } from "./../../utils/currencyFormat";

function Card({ data }) {
  return (
    <section>
      <Container key={data.id}>
        <Top>
          <section>
            <SubTitle>marca:</SubTitle>
            <Information>{data.marca_nome}</Information>
          </section>
          <section>
            <SubTitle>ano:</SubTitle>
            <Information> {data.ano}</Information>
          </section>
        </Top>

        <Content>
          <div>
            <BrandName>{data.nome_modelo}</BrandName>

            <ul>
              <li>
                <SubTitle>Cor:</SubTitle>
                <Information>{data.cor}</Information>
              </li>
              <li>
                <SubTitle>Combustível:</SubTitle>
                <Information> {data.combustivel}</Information>
              </li>
              <li>
                <SubTitle>Portas:</SubTitle>
                <Information> {data.num_portas}</Information>
              </li>
            </ul>
          </div>

          <BoxFlex>
            <section>
              <SubTitle>Valor</SubTitle>
              <MoneyValue>{currencyFormat(data.valor_fipe)}</MoneyValue>
            </section>

            <section>
              <SubTitle>Registro:</SubTitle>

              <Registered>{formatDate(data.timestamp_cadastro)}</Registered>
            </section>
          </BoxFlex>
        </Content>
      </Container>
    </section>
  );
}

export default Card;
