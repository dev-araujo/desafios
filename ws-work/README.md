# WS Work


- Deploy da aplicação : https://ws-work.dev-araujo.repl.co/

## Algus pontos:

- Como o ponto 3 desse teste era a criação de um formulário para adicionar um novo carro, acabei achando melhor utilizar uma fake-api com os dados do link http://demo0566678.mockable.io/test-ws-front, isso me possibilitou executar tanto o ponto 1 como o ponto 3 (A listagem e a adição) utilizando uma url.

- Utilizei **Context-Api** para os estados da aplicação. Os dados da api estão armazenados no estado `cars`

- Decidi fazer a listagem em formatos de cards, por achar mais interessante que uma tabela por exemplo. A estrutura de cada card isoladamente está em `src/components/Card`, mas a listagem em si, se encontra em `src/layout`.

- Acabei adicionando um campo de busca para que a pesquisa ficasse mais facilitada em conjunto com um 'filtro' por marcas(neste o usuário pode ao clicar na marca desejada ver as opções disponíveis ).

- Para utilizar o componente da listagem, basta importar o componente `Card` e o estado ``cars`` utilizando o hook ``useContext``, e o `GlobalContext` no caminho ``src/context/GlobalStateContext``.
Depois basta mapear o ``cars`` e retornar o componente ``Card`` utilizando o parametro do map como valor do props ``data``. 
Há um exemplo disso sendo feito em `src/layout` , linhas 15 à 19.

- Obs.: Em `src/layout` criei uma variavel para utilizar a função `filter`(`src/utils/filter`) e tornar os campos de busca dinâmicos, em todo o caso, o componente funciona mapeando só o estado `cars`.

