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
  const usuario = usuarioController.buscarPorId(id);
  usuario
    .then((usuariores) => res.status(200).json(usuariores))
    .catch((error) => res.status(400).json(error.message));
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
  const usuario = usuarioController.deletar(id);
  usuario
    .then((usuarioDeletado) => res.status(200).json(usuarioDeletado))
    .catch((error) => res.status(400).json(error.message));
});

module.exports = router;
