const express = require("express");
const livrosRoutes = require("./src/livros/livros.routes.js");
const autoresRoutes = require("./src/autores/autores.routes.js");
const emprestimosRoutes = require("./src/emprestimos/emprestimo.routes.js");
const leitoresRoutes = require("./src/leitores/leitores.routes.js");

const app = express();
const PORT = 3001;

app.use(express.json());

app.use(livrosRoutes);
app.use(autoresRoutes);
app.use(emprestimosRoutes);
app.use(leitoresRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});