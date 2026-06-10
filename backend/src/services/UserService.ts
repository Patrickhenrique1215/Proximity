import bcrypt from "bcrypt";

import { CreateUserDTO } from "../schemas/createUserSchema";

import {
    criarUsuarioRepository,
    buscarUsuarioPorEmail
} from "../repositories/UserRepository";

export async function criarUsuarioService(
    usuario: CreateUserDTO
) {

    const usuarioExistente = await buscarUsuarioPorEmail(
        usuario.email
    );

   if (usuarioExistente.length > 0) {

        throw new Error("E-mail já cadastrado.");

    }

    const senhaHash = await bcrypt.hash(
        usuario.senha,
        10
    );

    await criarUsuarioRepository({

        ...usuario,

        senha: senhaHash,

    });

}