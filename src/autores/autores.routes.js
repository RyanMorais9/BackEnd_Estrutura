const express = require("express");
const autoresController = require("./autores.controller");

const router = express.Router();

router.get("/autores", autoresController.listar);
router.get("/autores/:id", autoresController.buscarPorId);
router.post("/autores", autoresController.adicionar);
router.put("/autores/:id", autoresController.atualizar);
router.delete("/autores/:id", autoresController.deletarPorId);

module.exports = router;
