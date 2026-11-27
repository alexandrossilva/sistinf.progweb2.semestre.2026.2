import express from "express";
import UsuarioController from "../controllers/UsuarioController.js";

const router = express.Router();

router.get("/", UsuarioController.listar);
router.post("/", UsuarioController.cadastrar);
router.put("/:id", UsuarioController.editar);
router.delete("/:id", UsuarioController.excluir);
router.get("/cadastro", UsuarioController.formularioCadastro);
router.get("/:id/edicao", UsuarioController.formularioEdicao);

export default router;