import { Request, Response } from "express";
import {
    criarPreferenciaService,
    listarPreferenciasPorUsuarioService,
    deletarPreferenciaService
} from "../services/PreferenceService";

export async function criarPreferencia(req: Request, res: Response) {
    try {
        await criarPreferenciaService(req.body);
        return res.status(201).json({ mensagem: "Preferência adicionada com sucesso." });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: "Erro interno do servidor." });
    }
}

export async function listarPreferenciasPorUsuario(req: Request, res: Response) {
    try {
        const userId = Number(req.params.userId);
        if (isNaN(userId)) {
            return res.status(400).json({ erro: "ID do usuário inválido." });
        }

        const preferencias = await listarPreferenciasPorUsuarioService(userId);
        return res.status(200).json(preferencias);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: "Erro interno do servidor." });
    }
}

export async function deletarPreferencia(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ erro: "ID da preferência inválido." });
        }

        await deletarPreferenciaService(id);
        return res.status(200).json({ mensagem: "Preferência removida com sucesso." });
    } catch (error: any) {
        if (error.message === "Preferência não encontrada.") {
            return res.status(404).json({ erro: error.message });
        }
        console.error(error);
        return res.status(500).json({ erro: "Erro interno do servidor." });
    }
}