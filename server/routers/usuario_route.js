const { Router } = require("express");
const router = Router();
const usuarioController = require("../controllers/usuario_controller");

router.get("/usuario", usuarioController.listar);

router.get("/usuario/:id", usuarioController.buscarPorId);

router.post("/usuario", usuarioController.criar);

router.put("/usuario/:id", usuarioController.atualizar);

router.delete("/usuario/:id", usuarioController.deletar);

module.exports = router;
