class UsuarioController {
  buscar() {
    return "Buscando Usuarios...";
  }
  buscarPorId(id) {
    return `Buscando por usuario de ID ${id}`;
  }
  criar() {
    return "Criando Usuario";
  }
  atualizar(id) {
    return `Alterando Usuario de ID ${id}`;
  }
  deletar(id) {
    return `Deletando Usuario de ID ${id}`;
  }
}

module.exports = new UsuarioController();
