// PARTE 2: Importando e Executando (index.js)

// Importando as funções do arquivo funcoes.js usando require().
// A desestruturação { ... } pega apenas as funções que exportamos lá.
const { filtrarNaoAssistidos, mapearTitulos, buscarPorId } = require('./funcoes');

// O array catalogo agora fica no arquivo principal (index.js).
// Ele é passado como "dados de teste" para as funções importadas.
const catalogo = [
    { id: 1, titulo: 'Interestelar', genero: 'Ficção Científica', ano: 2014, assistido: true },
    { id: 2, titulo: 'O Poderoso Chefão', genero: 'Drama', ano: 1972, assistido: false },
    { id: 3, titulo: 'Matrix', genero: 'Ficção Científica', ano: 1999, assistido: true },
    { id: 4, titulo: 'O Senhor dos Anéis', genero: 'Fantasia', ano: 2001, assistido: false },
    { id: 5, titulo: 'Stranger Things', genero: 'Suspense', ano: 2016, assistido: false }
];

// --- Executando e exibindo os resultados ---

console.log("--- Itens NÃO assistidos ---");
console.log(filtrarNaoAssistidos(catalogo));

console.log("\n--- Títulos em MAIÚSCULO ---");
console.log(mapearTitulos(catalogo));

console.log("\n--- Buscando item com ID 3 ---");
console.log(buscarPorId(catalogo, 3)); // Passamos o catalogo e o id

console.log("\n--- Buscando item com ID 99 (não existe) ---");
console.log(buscarPorId(catalogo, 99));