import { useState, useEffect } from "react";
import GlobalStateContext from "./GlobalStateContext";

import axios from "axios";

const GlobalState = (props) => {
  const API_URL = "https://test-ws.dev-araujo.repl.co/cars";

  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const [open,setOpen]=useState(false)
  const [newCarForm, setNewCarForm] = useState({
    marca_id: "",
    marca_nome: "",
    nome_modelo: "",
    ano: "",
    combustivel: "",
    num_portas: "",
    valor_fipe: "",
    cor: "",
    timestamp_cadastro: ''
  });

  const getCars = () => {
    axios
      .get(`${API_URL}`)
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCars();
  }, []);

  const data = {
    cars,
    search,
    setSearch,
    newCarForm,
    setNewCarForm,
    open,setOpen
  };
  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
