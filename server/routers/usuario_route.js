const { Router } = require("express");
const router = Router();
const usuarioController = require("../controllers/usuario_controller");

router.get("/", (req, res) => {
  res.send("Olá Mundo!");
});

router.get("/usuario", (req, res) => {
  const usuarios = usuarioController.buscar();
  usuarios
    .then((usuario) => res.status(200).json(usuario))
    .catch((error) => res.status(400).json(error.message));
});

router.get("/usuario/:id", (req, res) => {
  const { id } = req.params;
  const resposta = usuarioController.buscarPorId(id);
  res.send(resposta);
});

router.post("/usuario", (req, res) => {
  const novoUsuario = req.body;

  const usuario = usuarioController.criar(novoUsuario);
  usuario
    .then((usuarioCriado) => res.status(201).json(usuarioCriado))
    .catch((error) => res.status(400).json(error.message));
});

router.put("/usuario/:id", (req, res) => {
  const { id } = req.params;
  const usuario_atualizado = req.body;
  const usuario = usuarioController.atualizar(usuario_atualizado, id);
  usuario
    .then((usuarioAtualizado) => res.status(200).json(usuarioAtualizado))
    .catch((error) => res.status(400).json(error.message));
});

router.delete("/usuario/:id", (req, res) => {
  const { id } = req.params;
  const resposta = usuarioController.deletar(id);
  res.send(resposta);
});

module.exports = router;
