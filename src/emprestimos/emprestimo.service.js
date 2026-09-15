const emprestimosRepository = require("./emprestimo.repository");

async function listar() {
    return emprestimosRepository.listar();
}

async function buscarPorId(id) {
    return emprestimosRepository.buscarPorId(id);
}

async function adicionar(dados) {
    return emprestimosRepository.adicionar(dados);
}

async function atualizar(id, dados) {
    return emprestimosRepository.atualizar(id, dados);
}

async function deletarPorId(id) {
    return emprestimosRepository.deletarPorId(id);
}

module.exports = { listar, buscarPorId, adicionar, atualizar, deletarPorId };
