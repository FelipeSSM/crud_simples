const { Router } = require("express");
const router = Router();
const usuarioController = require("../controllers/usuario_controller");

router.get("/", (req, res) => {
  res.send("Olá Mundo!");
});

router.get("/usuario", (req, res) => {
  const resposta = usuarioController.buscar();
  res.send(resposta);
});

router.get("/usuario/:id", (req, res) => {
  const { id } = req.params;
  const resposta = usuarioController.buscarPorId(id);
  res.send(resposta);
});

router.post("/usuario", (req, res) => {
  const resposta = usuarioController.criar();
  res.send(resposta);
});

router.put("/usuario/:id", (req, res) => {
  const { id } = req.params;
  const resposta = usuarioController.atualizar(id);
  res.send(resposta);
});

router.delete("/usuario/:id", (req, res) => {
  const { id } = req.params;
  const resposta = usuarioController.deletar(id);
  res.send(resposta);
});

module.exports = router;
