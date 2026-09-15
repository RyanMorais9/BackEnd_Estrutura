const express = require("express");
const livrosController = require("./livros.controller");

const router = express.Router();

router.get("/livros", livrosController.listar);
router.get("/livros/:id", livrosController.buscarPorId);
router.post("/livros", livrosController.adicionar);
router.put("/livros/:id", livrosController.atualizar);
router.delete("/livros/:id", livrosController.deletarPorId);

module.exports = router;
