class Tabelas {
  init(conexao) {
    this.conexao = conexao;
    this.criarTabelaUsuarios();
  }

  criarTabelaUsuarios() {
    const sql = `
    CREATE TABLE IF NOT EXISTS crud_simples_db.usuarios (
      ID_USUARIO INT NOT NULL AUTO_INCREMENT,
      NOME_USUARIO VARCHAR(255) NOT NULL,
      EMAIL_USUARIO VARCHAR(255) NOT NULL,
      CPF_USUARIO VARCHAR(255) NOT NULL,
      ENDERECO_USUARIO VARCHAR(255) NOT NULL,
      STATUS_USUARIO ENUM('ATIVO', 'DESATIVADO') NOT NULL DEFAULT 'ATIVO',
      PRIMARY KEY (ID_USUARIO));
    `;
    this.conexao.query(sql, (error) => {
      if (error) {
        console.log("Erro ao criar a tabela de usuários!");
        console.log(error.message);
        return;
      }
      console.log("Criou a tabela com sucesso");
    });
  }
}

module.exports = new Tabelas();
