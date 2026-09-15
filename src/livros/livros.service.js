const livrosRepository = require("./livros.repository");

async function listar() {
    return livrosRepository.listar();
}

async function buscarPorId(id) {
    return livrosRepository.buscarPorId(id);
}

async function adicionar(dados) {
    return livrosRepository.adicionar(dados);
}

async function atualizar(id, dados) {
    return livrosRepository.atualizar(id, dados);
}

async function deletarPorId(id) {
    return livrosRepository.deletarPorId(id);
}

module.exports = { listar, buscarPorId, adicionar, atualizar, deletarPorId };
