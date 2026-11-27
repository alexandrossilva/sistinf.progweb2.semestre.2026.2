import database from "../config/database.js";

class Usuario {

    static async listar() {
        return await database.query(
            "SELECT * FROM usuario"
        );
    }

    static async cadastrar(nome, email, login, senha) {
        const resultado = await database.query(
            "INSERT INTO usuario (nome, email, login, senha) VALUES(?, ?, ?, ?)",
            [nome, login, senha, email]
        );

        console.log(`ID de novo usuário: ${resultado.insertId}`);

        return {
            nome: nome,
            email: email,
            login: login,
            senha: senha
        };
    }

    static async editar(id, nome, email, login, senha) {
        const resultado = await database.query(
            "UPDATE usuario SET nome = ?, login = ?, email = ?, senha = ? WHERE id = ?",
            [nome, login, email, senha, id]
        );

        if (resultado.affectedRows > 0) {
            return {
                id: id,
                nome: nome,
                email: email,
                login: login,
                senha: senha
            }
        }
        else {
            return null;
        }
    }

    static async excluir(id) {
        const usuario = await this.getById(id);

        if (usuario) {
            const resultado = await database.query(
                "DELETE FROM usuario WHERE id = ?",
                [id]
            );
           
            if (resultado.affectedRows > 0) {
                return usuario;
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    }

    static async getById(id) {
        const resultado = await database.query(
            "SELECT * FROM usuario WHERE id = ?",
            [id]
        );

        if (resultado.length > 0) {
            return {
                id: resultado[0].id,
                nome: resultado[0].nome,
                email: resultado[0].email,
                login: resultado[0].login,
                senha: resultado[0].senha
            };
        }
        else {
            return null;
        }
    }


}

export default Usuario;