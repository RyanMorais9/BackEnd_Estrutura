const livrosService = require("./livros.service");

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
        const resultado = await livrosService.listar();
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
        const resultado = await livrosService.buscarPorId(id);
        if (!resultado) {
            return res.status(404).json({ erro: "Livro não encontrado" });
        }
        return res.status(200).json(resultado);
    } catch (error) {
        return responderErro(res, error);
    }
}

async function adicionar(req, res) {
    try {
        const { autor_id, titulo, isbn, editora, paginas, ano_publicacao, categoria } = req.body || {};
        const resultado = await livrosService.adicionar({ autor_id, titulo, isbn, editora, paginas, ano_publicacao, categoria });
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
        const { autor_id, titulo, isbn, editora, paginas, ano_publicacao, categoria } = req.body || {};
        const resultado = await livrosService.atualizar(id, { autor_id, titulo, isbn, editora, paginas, ano_publicacao, categoria });
        if (!resultado) {
            return res.status(404).json({ erro: "Livro não encontrado" });
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
        const resultado = await livrosService.deletarPorId(id);
        if (!resultado) {
            return res.status(404).json({ erro: "Livro não encontrado" });
        }
        return res.status(200).json({ mensagem: "Livro deletado com sucesso" });
    } catch (error) {
        return responderErro(res, error);
    }
}

module.exports = { listar, buscarPorId, adicionar, atualizar, deletarPorId };
