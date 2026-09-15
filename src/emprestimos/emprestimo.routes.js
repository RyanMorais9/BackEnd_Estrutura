const express = require("express");
const emprestimosController = require("./emprestimo.controller");

const router = express.Router();

router.get("/emprestimos", emprestimosController.listar);
router.get("/emprestimos/:id", emprestimosController.buscarPorId);
router.post("/emprestimos", emprestimosController.adicionar);
router.put("/emprestimos/:id", emprestimosController.atualizar);
router.delete("/emprestimos/:id", emprestimosController.deletarPorId);

module.exports = router;
