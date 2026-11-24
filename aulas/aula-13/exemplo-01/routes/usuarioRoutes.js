import express from "express";
import UsuarioController from "../controllers/UsuarioController.js";

const router = express.Router();

router.get("/", UsuarioController.listar);
router.post("/", UsuarioController.cadastrar);
router.post("/editar", UsuarioController.editar);
router.get("/excluir", UsuarioController.excluir);
router.get("/cadastro", UsuarioController.formularioCadastro);
router.get("/edicao", UsuarioController.formularioEdicao);

export default router;