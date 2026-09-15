const autoresService = require("./autores.service");

function responderErro(res, error) {
    if (error.name === "SequelizeForeignKeyConstraintError") {
        return res.status(409).json({ erro: "Operação impedida por um registro relacionado" });
    }
    if (error.name === "SequelizeUniqueConstraintError") {
        return res.status(409).json({ erro: "Já existe um registro com esses dados" });
    }
    const status = error.name === "SequelizeValidationError" ? 400 : 500;
    return res.status(status).json({ erro: error.message });
}

async function listar(req, res) {
    try {
        const resultado = await autoresService.listar();
        return res.status(200).json(resultado);
    } catch (error) {
        return responderErro(res, error);
    }
}

async function buscarPorId(req, res) {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({ erro: "ID inválido" });
        }
        const resultado = await autoresService.buscarPorId(id);
        if (!resultado) {
            return res.status(404).json({ erro: "Autor não encontrado" });
        }
        return res.status(200).json(resultado);
    } catch (error) {
        return responderErro(res, error);
    }
}

async function adicionar(req, res) {
    try {
        const { nome, nacionalidade, ano_nascimento } = req.body || {};
        const resultado = await autoresService.adicionar({ nome, nacionalidade, ano_nascimento });
        return res.status(201).json(resultado);
    } catch (error) {
        return responderErro(res, error);
    }
}

async function atualizar(req, res) {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({ erro: "ID inválido" });
        }
        const { nome, nacionalidade, ano_nascimento } = req.body || {};
        const resultado = await autoresService.atualizar(id, { nome, nacionalidade, ano_nascimento });
        if (!resultado) {
            return res.status(404).json({ erro: "Autor não encontrado" });
        }
        return res.status(200).json(resultado);
    } catch (error) {
        return responderErro(res, error);
    }
}

async function deletarPorId(req, res) {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({ erro: "ID inválido" });
        }
        const resultado = await autoresService.deletarPorId(id);
        if (!resultado) {
            return res.status(404).json({ erro: "Autor não encontrado" });
        }
        return res.status(200).json({ mensagem: "Autor deletado com sucesso" });
    } catch (error) {
        return responderErro(res, error);
    }
}

module.exports = { listar, buscarPorId, adicionar, atualizar, deletarPorId };
