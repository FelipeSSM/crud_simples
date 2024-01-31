const usuario_model = require("../models/usuario_model");
class UsuarioController {
  buscar() {
    return usuario_model.listar();
  }
  buscarPorId(id) {
    return `Buscando por usuario de ID ${id}`;
  }
  criar(novoUsuario) {
    return usuario_model.criar(novoUsuario);
  }
  atualizar(usuario_atualizado, id) {
    return usuario_model.atualizar(usuario_atualizado, id);
  }
  deletar(id) {
    return `Deletando Usuario de ID ${id}`;
  }
}

module.exports = new UsuarioController();
