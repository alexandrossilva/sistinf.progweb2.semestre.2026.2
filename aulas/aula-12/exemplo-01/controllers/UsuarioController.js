import Usuario from "../models/Usuario.js";

class UsuarioController {

    static listar(req, res) {
        const usuarios = Usuario.listar();

        res.render("usuarios/listar", {
            usuarios: usuarios
        });
    }

    static cadastrar(req, res) {
        const nome = req.body.nome;
        const email = req.body.email;
        const login = req.body.login;
        const senha = req.body.senha;

        const novoUsuario = Usuario.cadastrar(nome, email, login, senha);

        res.redirect("/usuarios");
    }

    static formularioCadastro(req, res) {
        res.render("usuarios/cadastrar");
    }

}

export default UsuarioController;