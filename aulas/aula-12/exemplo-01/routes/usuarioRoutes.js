import express from "express";
import UsuarioController from "../controllers/UsuarioController.js";

const router = express.Router();

router.get("/", UsuarioController.listar);
router.post("/", UsuarioController.cadastrar);
router.get("/cadastro", UsuarioController.formularioCadastro);

export default router;