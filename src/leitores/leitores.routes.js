const express = require("express");
const leitoresController = require("./leitores.controller");

const router = express.Router();

router.get("/leitores", leitoresController.listar);
router.get("/leitores/:id", leitoresController.buscarPorId);
router.post("/leitores", leitoresController.adicionar);
router.put("/leitores/:id", leitoresController.atualizar);
router.delete("/leitores/:id", leitoresController.deletarPorId);

module.exports = router;
