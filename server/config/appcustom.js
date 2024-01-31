const router = require("../routers/index");
const conexao = require("../database/conexao");
const tabelas = require("../database/tabelas");

module.exports = (app, express) => {
  router(app, express);
  tabelas.init(conexao);
};
