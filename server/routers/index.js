const routerUsuario = require("./usuario_route");
module.exports = (app, express) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(routerUsuario);
};
