const conexao = require("../database/conexao");
class UsuarioModel {
  executaQuery(sql, parametros = "") {
    return new Promise((resolve, reject) => {
      conexao.query(sql, parametros, (error, response) => {
        if (error) {
          return reject(error);
        }
        return resolve(response);
      });
    });
  }

  criar(novoUsuario) {
    const sql = "INSERT INTO usuarios SET ?";
    return this.executaQuery(sql, novoUsuario);
  }

  listar() {
    const sql = "SELECT * FROM usuarios";
    return this.executaQuery(sql);
  }

  listarPorId(id) {
    const sql = "SELECT * FROM usuarios WHERE ID_USUARIO = ?";
    return this.executaQuery(sql, id);
  }

  atualizar(usuario_atualizado, id) {
    const sql = "UPDATE usuarios SET ? WHERE ID_USUARIO = ?";
    return this.executaQuery(sql, [usuario_atualizado, id]);
  }

  deletar(id) {
    const sql = "DELETE FROM usuarios WHERE ID_USUARIO = ?";
    return this.executaQuery(sql, id);
  }
}

module.exports = new UsuarioModel();
