import usuarios from "../data/usuario.js";

let ultimoId = 0;

class Usuario {

    static listar() {
        return usuarios;
    }

    static cadastrar(nome, email, login, senha) {
        const novoUsuario = {
            id: ++ultimoId,
            nome: nome,
            email: email,
            login: login,
            senha: senha
        };

        usuarios.push(novoUsuario);

        return novoUsuario;
    }

}

export default Usuario;