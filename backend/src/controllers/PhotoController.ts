import { Request, Response } from "express";
import { 
    criarFotoService, 
    listarFotosPorUsuarioService, 
    deletarFotoService 
} from "../services/PhotoService";

export async function criarFoto(req: Request, res: Response) {
    try {
        await criarFotoService(req.body);
        return res.status(201).json({ mensagem: "Foto adicionada com sucesso." });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: "Erro interno do servidor." });
    }
}

export async function listarFotosPorUsuario(req: Request, res: Response) {
    try {
        const userId = Number(req.params.userId);
        if (isNaN(userId)) {
            return res.status(400).json({ erro: "ID do usuário inválido." });
        }

        const fotos = await listarFotosPorUsuarioService(userId);
        return res.status(200).json(fotos);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: "Erro interno do servidor." });
    }
}

export async function deletarFoto(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ erro: "ID da foto inválido." });
        }

        await deletarFotoService(id);
        return res.status(200).json({ mensagem: "Foto removida com sucesso." });
    } catch (error: any) {
        if (error.message === "Foto não encontrada.") {
            return res.status(404).json({ erro: error.message });
        }
        console.error(error);
        return res.status(500).json({ erro: "Erro interno do servidor." });
    }
}