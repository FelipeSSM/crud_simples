const usuario_model = require("../models/usuario_model");
class UsuarioController {
  listar(req, res) {
    const usuarios = usuario_model.filtrarAtivados();
    return usuarios
      .then((usuario) => res.status(200).json(usuario))
      .catch((error) => res.status(400).json(error.message));
  }

  listarDesativados(req, res) {
    const usuarios = usuario_model.filtrarDesativados();
    return usuarios
      .then((usuario) => res.status(200).json(usuario))
      .catch((error) => res.status(400).json(error.message));
  }

  buscarPorId(req, res) {
    const { id } = req.params;
    const usuario = usuario_model.listarPorId(id);
    return usuario
      .then((usuariores) => res.status(200).json(usuariores))
      .catch((error) => res.status(400).json(error.message));
  }

  buscaFiltro(req, res) {
    const { valor } = req.params;
    let usuario;
    if (valor === "null") {
      usuario = usuario_model.filtrarAtivados();
    } else {
      usuario = usuario_model.buscaFiltro(valor);
    }

    return usuario
      .then((usuariores) => res.status(200).json(usuariores))
      .catch((error) => res.status(400).json(error.message));
  }

  criar(req, res) {
    const novoUsuario = req.body;
    const usuario = usuario_model.criar(novoUsuario);
    return usuario
      .then((usuarioCriado) => res.status(201).json(usuarioCriado))
      .catch((error) => res.status(400).json(error.message));
  }
  atualizar(req, res) {
    const { id } = req.params;
    const usuario_atualizado = req.body;
    const usuario = usuario_model.atualizar(usuario_atualizado, id);
    return usuario
      .then((usuarioAtualizado) => res.status(200).json(usuarioAtualizado))
      .catch((error) => res.status(400).json(error.message));
  }

  ativarUsuario(req, res) {
    const { id } = req.params;
    const usuario = usuario_model.ativarUsuario(id);
    return usuario
      .then((usuarioAtualizado) => res.status(200).json(usuarioAtualizado))
      .catch((error) => res.status(400).json(error.message));
  }

  desativarUsuario(req, res) {
    const { id } = req.params;
    const usuario = usuario_model.desativarUsuario(id);
    return usuario
      .then((usuarioAtualizado) => res.status(200).json(usuarioAtualizado))
      .catch((error) => res.status(400).json(error.message));
  }

  deletar(req, res) {
    const { id } = req.params;
    const usuario = usuario_model.deletar(id);
    return usuario
      .then((usuarioDeletado) => res.status(200).json(usuarioDeletado))
      .catch((error) => res.status(400).json(error.message));
  }
}

module.exports = new UsuarioController();
