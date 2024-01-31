const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("Olá Mundo!");
});

router.get("/usuario", (req, res) => {
  res.send("Listando todos os usuários");
});

router.get("/usuario/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Listando dados do usuário de ID ${id}`);
});

router.post("/usuario", (req, res) => {
  res.send(`Criando usuario`);
});

router.put("/usuario/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Atualizando dados do usuário de ID ${id}`);
});

router.delete("/usuario/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Deletando usuario de ID ${id}`);
});

module.exports = router;
