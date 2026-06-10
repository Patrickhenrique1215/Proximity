import bcrypt from "bcrypt";

import { CreateUserDTO } from "../schemas/createUserSchema";
import { UpdateUserDTO } from "../schemas/updateUserSchema";

import {
    criarUsuarioRepository,
    buscarUsuarioPorEmail, 
    buscarUsuarioPorId,       // Importe a nova função
    listarUsuariosRepository,
    atualizarUsuarioRepository,
    deletarUsuarioRepository
} from "../repositories/UserRepository";

import { listarPreferenciasPorUsuarioRepository } from "../repositories/PreferenceRepository";
import { obterFeedRepository } from "../repositories/UserRepository";
import { obterFotosParaUsuariosRepository } from "../repositories/PhotoRepository";




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

export async function obterUsuarioPorIdService(id: number) {
    const usuario = await buscarUsuarioPorId(id);

    if (!usuario) {
        throw new Error("Usuário não encontrado.");
    }

    return usuario;
}

export async function listarUsuariosService() {
    return await listarUsuariosRepository();
}

export async function atualizarUsuarioService(id: number, dados: UpdateUserDTO) {
    const usuario = await buscarUsuarioPorId(id);

    if (!usuario) {
        throw new Error("Usuário não encontrado.");
    }

    await atualizarUsuarioRepository(id, dados);
}

export async function deletarUsuarioService(id: number) {
    const usuario = await buscarUsuarioPorId(id);

    if (!usuario) {
        throw new Error("Usuário não encontrado.");
    }

    await deletarUsuarioRepository(id);
}

export async function obterFeedService(userId: number) {
    const prefsObjeto = await listarPreferenciasPorUsuarioRepository(userId);
    const preferencias = prefsObjeto.map(p => p.interesse);

    if (preferencias.length === 0) {
        return [];
    }

    // 2. Busca os usuários do feed (sem fotos por enquanto)
    const usuarios = await obterFeedRepository(userId, preferencias);

    if (usuarios.length === 0) {
        return [];
    }

    // 3. Extrai apenas os IDs dos usuários retornados no feed
    const usuariosIds = usuarios.map(u => u.id);

    // 4. Busca todas as fotos desses usuários de uma só vez
    const todasAsFotos = await obterFotosParaUsuariosRepository(usuariosIds);

    // 5. Junta as fotos a cada usuário correspondente
    const feedComFotos = usuarios.map(usuario => {
        // Filtra as fotos que pertencem a este usuário específico
        const fotosDoUsuario = todasAsFotos.filter(foto => foto.user_id === usuario.id);

        return {
            ...usuario,
            fotos: fotosDoUsuario // Adiciona o array de fotos dentro do objeto do usuário
        };
    });

    return feedComFotos;
}