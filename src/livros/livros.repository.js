const Livros = require("../../database/models/livro.model");

async function listar() {
    return Livros.findAll({ order: [["titulo", "ASC"]] });
}

async function buscarPorId(id) {
    return Livros.findByPk(id);
}

async function adicionar(dados) {
    return Livros.create(dados);
}

async function atualizar(id, dados) {
    const livro = await Livros.findByPk(id);
    if (!livro) return null;
    return livro.update(dados);
}

async function deletarPorId(id) {
    const livro = await Livros.findByPk(id);
    if (!livro) return null;
    await livro.destroy();
    return livro;
}

module.exports = { 
    listar, 
    buscarPorId, 
    adicionar, 
    atualizar, 
    deletarPorId 
};
