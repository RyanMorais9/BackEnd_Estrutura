const sequelize = require("../connection");
const { Sequelize } = require("sequelize");
const Autor = require("./autor.model");
const Livros = require("./livro.model");
const Leitores = require("./leitor.model");
const Emprestimos = require("./emprestimo.model");

module.exports = { sequelize, Sequelize, Autor, Livros, Leitores, Emprestimos };
