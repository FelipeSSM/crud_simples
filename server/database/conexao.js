const mysql = require("mysql2");

const conexao = mysql.createConnection({
  host: "localhost",
  port: 4321,
  user: "usuario",
  password: "12341234",
  database: "crud_simples_db",
});

module.exports = conexao;
