import Usuario from "../models/Usuario.js";

class UsuarioController {

    static async listar(req, res) {
        const usuarios = await Usuario.listar();

        res.render("usuarios/listar", {
            usuarios: usuarios
        });
    }

    static async cadastrar(req, res) {
        const nome = req.body.nome;
        const email = req.body.email;
        const login = req.body.login;
        const senha = req.body.senha;

        const novoUsuario = await Usuario.cadastrar(nome, email, login, senha);

        res.redirect("/usuarios");
    }

    static editar(req, res) {
        const id = req.body.id;
        const nome = req.body.nome;
        const email = req.body.email;
        const login = req.body.login;
        const senha = req.body.senha;

        const usuarioEditado = Usuario.editar(id, nome, email, login, senha);

        res.redirect("/usuarios");
    }

    static editar(req, res) {
        const id = req.params.id;
        const nome = req.body.nome;
        const email = req.body.email;
        const login = req.body.login;
        const senha = req.body.senha;

        const usuarioEditado = Usuario.editar(id, nome, email, login, senha);

        res.redirect("/usuarios");
    }

    static excluir(req, res) {
        const id = req.params.id;

        const usuarioExcluido = Usuario.excluir(id);

        res.redirect("/usuarios");
    }

    static formularioCadastro(req, res) {
        res.render("usuarios/cadastrar");
    }

    static async formularioEdicao(req, res) {
        const idUsuario = req.params.id;

        res.render("usuarios/editar", {
            usuario: await Usuario.getById(idUsuario)
        });
    }

}

export default UsuarioController;