const emprestimosService = require("./emprestimo.service");

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
        const resultado = await emprestimosService.listar();
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
        const resultado = await emprestimosService.buscarPorId(id);
        if (!resultado) {
            return res.status(404).json({ erro: "Empréstimo não encontrado" });
        }
        return res.status(200).json(resultado);
    } catch (error) {
        return responderErro(res, error);
    }
}

async function adicionar(req, res) {
    try {
        const { leitor_id, livro_id, data_emprestimo, data_prevista, data_devolucao } = req.body || {};
        const resultado = await emprestimosService.adicionar({ leitor_id, livro_id, data_emprestimo, data_prevista, data_devolucao });
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
        const { leitor_id, livro_id, data_emprestimo, data_prevista, data_devolucao } = req.body || {};
        const resultado = await emprestimosService.atualizar(id, { leitor_id, livro_id, data_emprestimo, data_prevista, data_devolucao });
        if (!resultado) {
            return res.status(404).json({ erro: "Empréstimo não encontrado" });
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
        const resultado = await emprestimosService.deletarPorId(id);
        if (!resultado) {
            return res.status(404).json({ erro: "Empréstimo não encontrado" });
        }
        return res.status(200).json({ mensagem: "Empréstimo deletado com sucesso" });
    } catch (error) {
        return responderErro(res, error);
    }
}

module.exports = { listar, buscarPorId, adicionar, atualizar, deletarPorId };
