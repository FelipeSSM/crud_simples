const express = require("express");
const app = express();
const porta = 1234;
const router = require("./routers/index");
router(app);

app.listen(porta, (error) => {
  if (error) {
    console.log("Erro ao iniciar a aplicação");
    return;
  }
  console.log(`Aplicação rodando na porta ${porta}`);
});
