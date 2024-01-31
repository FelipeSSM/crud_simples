const conexao = require("../database/conexao");
class UsuarioModel {
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
}

module.exports = new UsuarioModel();
