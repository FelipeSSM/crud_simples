const routerUsuario = require("./usuario_route");
module.exports = (app) => {
  app.use(routerUsuario);
};
