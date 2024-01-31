const conexao = require("../database/conexao");
class UsuarioModel {
  criar(novoUsuario) {
    const sql = "INSERT INTO usuarios SET ?";
    return new Promise((resolve, reject) => {
      conexao.query(sql, novoUsuario, (error, response) => {
        if (error) {
          console.log("Erro ao criar usuario...");
          reject(error);
        }
        console.log("Criando usuario");
        resolve(response);
      });
    });
  }

  listar() {
    const sql = "SELECT * FROM usuarios";
    return new Promise((resolve, reject) => {
      conexao.query(sql, {}, (error, response) => {
        if (error) {
          console.log("Erro ao listar...");
          reject(error);
        }
        console.log("Listando Usuarios");
        resolve(response);
      });
    });
  }

  atualizar(usuario_atualizado, id) {
    const sql = "UPDATE usuarios SET ? WHERE ID_USUARIO = ?";
    return new Promise((resolve, reject) => {
      conexao.query(sql, [usuario_atualizado, id], (error, response) => {
        if (error) {
          console.log("Erro ao atualizar usuario...");
          reject(error);
        }
        console.log("Atualizando usuario");
        resolve(response);
      });
    });
  }

  deletar(id) {
    const sql = "DELETE FROM usuarios WHERE ID_USUARIO = ?";
    return new Promise((resolve, reject) => {
      conexao.query(sql, id, (error, response) => {
        if (error) {
          console.log("Erro ao deletar usuario...");
          reject(error);
        }
        console.log("Deletando Usuario");
        resolve(response);
      });
    });
  }
}

module.exports = new UsuarioModel();
