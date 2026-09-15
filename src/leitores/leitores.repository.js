const Leitores = require("../../database/models/leitor.model");

async function listar() {
    return Leitores.findAll({ order: [["nome", "ASC"]] });
}

async function buscarPorId(id) {
    return Leitores.findByPk(id);
}

async function adicionar(dados) {
    return Leitores.create(dados);
}

async function atualizar(id, dados) {
    const leitor = await Leitores.findByPk(id);
    if (!leitor) return null;
    return leitor.update(dados);
}

async function deletarPorId(id) {
    const leitor = await Leitores.findByPk(id);
    if (!leitor) return null;
    await leitor.destroy();
    return leitor;
}

module.exports = { listar, buscarPorId, adicionar, atualizar, deletarPorId };
