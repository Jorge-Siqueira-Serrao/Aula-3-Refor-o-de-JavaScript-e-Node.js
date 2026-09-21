// PARTE 1: Lógica e Manipulação de Dados em JavaScript Puro

// 1. Catálogo de Filmes ou Jogos (Arrays e Objetos)
// Criamos um array chamado 'catalogo' que contém vários objetos.
// Cada objeto representa um item com suas propriedades.
const catalogo = [
    { id: 1, titulo: 'Interestelar', genero: 'Ficção Científica', ano: 2014, assistido: true },
    { id: 2, titulo: 'O Poderoso Chefão', genero: 'Drama', ano: 1972, assistido: false },
    { id: 3, titulo: 'Matrix', genero: 'Ficção Científica', ano: 1999, assistido: true },
    { id: 4, titulo: 'O Senhor dos Anéis', genero: 'Fantasia', ano: 2001, assistido: false },
    { id: 5, titulo: 'Stranger Things', genero: 'Suspense', ano: 2016, assistido: false }
];

// 2. Filtrando por Status
// Arrow Function (função de seta) que recebe um array como parâmetro.
// O método .filter() cria um NOVO array com apenas os itens que passarem na condição.
// A condição aqui é: item.assistido === false (ou seja, NÃO assistidos).
const filtrarNaoAssistidos = (lista) => {
    return lista.filter(item => item.assistido === false);
};

// 3. Mapeando os Títulos
// Função que utiliza o método .map().
// O .map() percorre o array e transforma cada item. Aqui, ele pega apenas o 'titulo'
// e aplica o método .toUpperCase() para deixar tudo em LETRAS MAIÚSCULAS.
// Ele retorna um novo array apenas com strings (os títulos).
const mapearTitulos = (lista) => {
    return lista.map(item => item.titulo.toUpperCase());
};

// 4. Buscando por ID
// Função que recebe um 'id' como parâmetro.
// O método .find() percorre o array e retorna o PRIMEIRO objeto que satisfazer a condição.
// Se ele não encontrar nada, ele retorna 'undefined'.
// Obs: Como o 'catalogo' está no escopo global, a função consegue acessá-lo diretamente.
const buscarPorId = (id) => {
    return catalogo.find(item => item.id === id);
};

// =========================================================
// TESTES (Para exibir os resultados no terminal)
// =========================================================

console.log("--- Itens NÃO assistidos ---");
console.log(filtrarNaoAssistidos(catalogo));

console.log("\n--- Títulos em MAIÚSCULO ---");
console.log(mapearTitulos(catalogo));

console.log("\n--- Buscando item com ID 3 ---");
console.log(buscarPorId(3));

console.log("\n--- Buscando item com ID 99 (não existe) ---");
console.log(buscarPorId(99));