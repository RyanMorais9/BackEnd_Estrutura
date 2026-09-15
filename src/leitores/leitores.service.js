const leitoresRepository = require("./leitores.repository");

async function listar() {
    return leitoresRepository.listar();
}

async function buscarPorId(id) {
    return leitoresRepository.buscarPorId(id);
}

async function adicionar(dados) {
    return leitoresRepository.adicionar(dados);
}

async function atualizar(id, dados) {
    return leitoresRepository.atualizar(id, dados);
}

async function deletarPorId(id) {
    return leitoresRepository.deletarPorId(id);
}

module.exports = { listar, buscarPorId, adicionar, atualizar, deletarPorId };
