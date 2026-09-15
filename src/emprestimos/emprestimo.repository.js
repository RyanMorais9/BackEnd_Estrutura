const Emprestimos = require("../../database/models/emprestimo.model");

async function listar() {
    return Emprestimos.findAll({ order: [["id", "ASC"]] });
}

async function buscarPorId(id) {
    return Emprestimos.findByPk(id);
}

async function adicionar(dados) {
    return Emprestimos.create(dados);
}

async function atualizar(id, dados) {
    const emprestimo = await Emprestimos.findByPk(id);
    if (!emprestimo) return null;
    return emprestimo.update(dados);
}

async function deletarPorId(id) {
    const emprestimo = await Emprestimos.findByPk(id);
    if (!emprestimo) return null;
    await emprestimo.destroy();
    return emprestimo;
}

module.exports = { 
    listar, 
    buscarPorId, 
    adicionar, 
    atualizar, 
    deletarPorId 
};
