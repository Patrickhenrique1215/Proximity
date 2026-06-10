import { Request, Response } from "express";
import { criarUsuarioService, 
    obterUsuarioPorIdService, 
    listarUsuariosService,
    atualizarUsuarioService,
    deletarUsuarioService } from "../services/UserService";

import { obterFeedService } from "../services/UserService"; // Importe a nova função do service


export async function criarUsuario(
    req: Request,
    res: Response
) {
    try {

        await criarUsuarioService(req.body);

        return res.status(201).json({
            mensagem: "Usuário criado com sucesso."
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            erro: "Erro interno do servidor."
        });

    }
}

export async function obterUsuarioPorId(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
        
        if (isNaN(id)) {
            return res.status(400).json({ erro: "ID inválido." });
        }

        const usuario = await obterUsuarioPorIdService(id);
        return res.status(200).json(usuario);

    } catch (error: any) {
        if (error.message === "Usuário não encontrado.") {
            return res.status(404).json({ erro: error.message });
        }

        console.error(error);
        return res.status(500).json({ erro: "Erro interno do servidor." });
    }
}

export async function listarUsuarios(req: Request, res: Response) {
    try {
        const usuarios = await listarUsuariosService();
        return res.status(200).json(usuarios);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: "Erro interno do servidor." });
    }
}

export async function atualizarUsuario(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
        
        if (isNaN(id)) {
            return res.status(400).json({ erro: "ID inválido." });
        }

        await atualizarUsuarioService(id, req.body);

        return res.status(200).json({
            mensagem: "Usuário atualizado com sucesso."
        });

    } catch (error: any) {
        if (error.message === "Usuário não encontrado.") {
            return res.status(404).json({ erro: error.message });
        }

        console.error(error);
        return res.status(500).json({ erro: "Erro interno do servidor." });
    }
}

export async function deletarUsuario(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
        
        if (isNaN(id)) {
            return res.status(400).json({ erro: "ID inválido." });
        }

        await deletarUsuarioService(id);

        return res.status(200).json({
            mensagem: "Usuário deletado com sucesso."
        });

    } catch (error: any) {
        if (error.message === "Usuário não encontrado.") {
            return res.status(404).json({ erro: error.message });
        }

        console.error(error);
        return res.status(500).json({ erro: "Erro interno do servidor." });
    }
}

export async function obterFeed(req: Request, res: Response) {
    try {
        const userId = Number(req.params.userId);

        if (isNaN(userId)) {
            return res.status(400).json({ erro: "ID do usuário inválido." });
        }

        const feed = await obterFeedService(userId);
        return res.status(200).json(feed);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: "Erro interno do servidor." });
    }
}