import { useContext } from "react";
import GlobalStateContext from "../../../context/GlobalStateContext";
import axios from "axios";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import {
  Container,
  Input,
  Content,
  TopContent,
  FormColumns,
  FormStart,
  Action,
  OptionsSelect,
} from "./styles";

function Form() {
  const API_URL = "https://test-ws.dev-araujo.repl.co/cars";

  const { newCarForm, setNewCarForm } = useContext(GlobalStateContext);

  const brands = {
    TOYOTA: 1,
    FORD: 2,
    VW: 3,
    FIAT: 4,
  };

  const addNewCar = () => {
    const data = {
      marca_id:
        brands[newCarForm.marca_nome] === undefined
          ? 0
          : brands[newCarForm.marca_nome],
      marca_nome: newCarForm.marca_nome.toUpperCase(),
      nome_modelo: newCarForm.nome_modelo.toUpperCase(),
      ano: newCarForm.ano,
      combustivel: newCarForm.combustivel,
      num_portas: newCarForm.num_portas,
      valor_fipe: newCarForm.valor_fipe,
      cor: newCarForm.cor,
      timestamp_cadastro: String(new Date().getTime()).substring(0, 10),
    };
    if (
      data.marca_nome !== "" &&
      data.nome_modelo !== "" &&
      data.ano !== "" &&
      data.combustivel !== "" &&
      data.num_portas !== "" &&
      data.valor_fipe !== "" &&
      data.cor !== ""
    ) {
      axios
        .post(API_URL, data)
        .then((response) => {
          alert("Carro adicionado com sucesso!");
          window.location.reload();
        })
        .catch((error) => {
          alert("Houve algum erro! :(");
          console.log(error);
        });
    } else {
      return alert("Há algo de errado");
    }
  };

  return (
    <Container>
      <TopContent>
        <h1>Novo Carro</h1>
      </TopContent>

      <Content>
        <Input
          required
          label="Marca "
          variant="outlined"
          value={newCarForm.marca_nome}
          onChange={(e) =>
            setNewCarForm({ ...newCarForm, marca_nome: e.target.value })
          }
        />

        <FormColumns>
          <Input
            required
            label="Modelo"
            variant="outlined"
            value={newCarForm.nome_modelo}
            onChange={(e) =>
              setNewCarForm({ ...newCarForm, nome_modelo: e.target.value })
            }
          />
          <FormColumns>
            <Input
              required
              label="Cor"
              variant="outlined"
              value={newCarForm.cor}
              onChange={(e) =>
                setNewCarForm({ ...newCarForm, cor: e.target.value })
              }
            />
          </FormColumns>
        </FormColumns>

        <FormColumns>
          <Input
            type={"number"}
            required
            label="Ano"
            variant="outlined"
            value={newCarForm.ano}
            onChange={(e) =>
              setNewCarForm({ ...newCarForm, ano: e.target.value })
            }
          />

          <Input
            required
            label="Combustivel"
            variant="outlined"
            value={newCarForm.combustivel}
            onChange={(e) =>
              setNewCarForm({ ...newCarForm, combustivel: e.target.value })
            }
          />
        </FormColumns>
        <FormColumns>
          <FormControl>
            <InputLabel>Portas</InputLabel>
            <OptionsSelect
              required
              type={"number"}
              label="Categoria"
              value={newCarForm.num_portas}
              onChange={(e) =>
                setNewCarForm({ ...newCarForm, num_portas: e.target.value })
              }
            >
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </OptionsSelect>
          </FormControl>
        </FormColumns>

        <Input
          required
          label="Valor"
          variant="outlined"
          value={newCarForm.valor_fipe}
          type={"number"}
          onChange={(e) =>
            setNewCarForm({ ...newCarForm, valor_fipe: e.target.value })
          }
        />
        <FormStart></FormStart>
      </Content>
      <Action>
        <Button variant="contained" onClick={addNewCar}>
          Adicionar
        </Button>
      </Action>
    </Container>
  );
}

export default Form;
