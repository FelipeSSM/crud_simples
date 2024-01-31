const express = require("express");
const app = express();

const porta = 1234;

app.listen(porta, (error) => {
  if (error) {
    console.log("Erro ao iniciar a aplicação");
    return;
  }
  console.log(`Aplicação rodando na porta ${porta}`);
});
