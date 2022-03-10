export const filter = (search, arr) => {
  if (!!search) {
    return arr.filter((operation) => {
      return (
        operation.marca_nome.toLowerCase().includes(search.toLowerCase()) ||
        operation.nome_modelo.toLowerCase().includes(search.toLowerCase()) ||
        String(operation.ano).includes(search.toLowerCase()) ||
        operation.combustivel.toLowerCase().includes(search.toLowerCase()) ||
        String(operation.num_portas).includes(search.toLowerCase()) ||
        String(operation.valor_fipe).includes(search.toLowerCase()) ||
        operation.cor.toLowerCase().includes(search.toLowerCase())
      );
    });
  } else {
    return arr;
  }
};

