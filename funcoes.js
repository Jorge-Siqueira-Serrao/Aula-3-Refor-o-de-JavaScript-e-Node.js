// PARTE 2: Modularização (funcoes.js)

// Agora as funções recebem o array 'lista' como parâmetro.
// Isso torna o código mais modular e reutilizável.

const filtrarNaoAssistidos = (lista) => {
    return lista.filter(item => item.assistido === false);
};

const mapearTitulos = (lista) => {
    return lista.map(item => item.titulo.toUpperCase());
};

// A função buscarPorId agora recebe a lista e o id.
// Isso é necessário porque o 'catalogo' não está mais neste arquivo.
const buscarPorId = (lista, id) => {
    return lista.find(item => item.id === id);
};

// Exportando as funções para que outros arquivos possam usá-las.
// O 'module.exports' é a forma do CommonJS de dizer que isso pode ser importado.
module.exports = {
    filtrarNaoAssistidos,
    mapearTitulos,
    buscarPorId
};