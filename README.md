# Aula 3 - Reforço de JavaScript e Node.js

Projeto simples de Node.js para praticar modularização e uso de funções em JavaScript.

## Objetivo

Este projeto demonstra:
- importação de módulos via `require()`
- exportação de funções em CommonJS
- manipulação de arrays
- uso de funções reutilizáveis para processar dados

## Estrutura

- `index.js`: arquivo principal com o catálogo de filmes e execução das funções
- `funcoes.js`: funções reutilizáveis para filtrar, transformar e buscar dados
- `package.json`: configuração do projeto e script de execução

## Funcionalidades

As funções implementadas são:
- `filtrarNaoAssistidos(lista)`: retorna apenas os itens com `assistido === false`
- `mapearTitulos(lista)`: converte os títulos para maiúsculas
- `buscarPorId(lista, id)`: busca um item pelo identificador

## Como executar

1. Abra o terminal na pasta do projeto.
2. Execute:

```bash
npm start
```

## Exemplo de saída

O projeto exibe no console:
- filmes não assistidos
- títulos em maiúsculas
- busca por ID existente
- busca por ID inexistente

## Tecnologias

- Node.js
- JavaScript

## Autor

Projeto desenvolvido para prática de reforço de JavaScript e Node.js.
