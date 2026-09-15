const autoresRepository = require("./autores.repository");

async function listar() {
    return autoresRepository.listar();
}

async function buscarPorId(id) {
    return autoresRepository.buscarPorId(id);
}

async function adicionar(dados) {
    return autoresRepository.adicionar(dados);
}

async function atualizar(id, dados) {
    return autoresRepository.atualizar(id, dados);
}

async function deletarPorId(id) {
    return autoresRepository.deletarPorId(id);
}

module.exports = { listar, buscarPorId, adicionar, atualizar, deletarPorId };
