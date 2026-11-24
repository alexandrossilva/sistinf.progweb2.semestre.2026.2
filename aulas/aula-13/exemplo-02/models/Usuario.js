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

    static editar(id, nome, email, login, senha) {
        const usuarioEditado = {
            id: id,
            nome: nome,
            email: email,
            login: login,
            senha: senha
        };

        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].id == id) {
                usuarios[i] = usuarioEditado;
                break;
            }
        }

        return usuarioEditado;
    }

    static excluir(id) {
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].id == id) {
                const usuarioRemovido = usuarios[i];
                usuarios.splice(i, 1);
                return usuarioRemovido;
            }
        }

        return null;
    }

    static getById(id) {
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].id == id) {
                return usuarios[i];
            }
        }

        return null;
    }


}

export default Usuario;