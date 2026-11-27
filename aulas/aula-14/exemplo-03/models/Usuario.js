import prisma from "../prisma7.config.js";

class Usuario {

    static async listar() {
        return await prisma.usuario.findMany();
    }

    static async cadastrar(nome, email, login, senha) {
        let novoUsuario = {
            nome: nome,
            email: email,
            login: login,
            senha: senha
        };

        const resultado = await prisma.usuario.create({
            data: novoUsuario
        })

        console.log(`ID de novo usuário: ${resultado.id}`);

        novoUsuario.id = resultado.id;

        return novoUsuario;
    }

    static async editar(id, nome, email, login, senha) {
        let usuarioEdicao = {
            id: parseInt(id),
            nome: nome,
            email: email,
            login: login,
            senha: senha
        };

        const resultado = await prisma.usuario.update({
            data: usuarioEdicao,
            where: {
                id: parseInt(id)
            }
        })

        return usuarioEdicao;
    }

    static async excluir(id) {
        const usuarioExclusao = await this.getById(id);

        if (usuarioExclusao) {
            await prisma.usuario.delete({
                where: {
                    id: parseInt(id)
                }
            })

            return usuarioExclusao;
        }
        else {
            return null;
        }
    }

    static async getById(id) {
        const usuario = await prisma.usuario.findUnique({
            where: {id: parseInt(id)}
        });

        return usuario;
    }


}

export default Usuario;