import { Request, Response } from "express";
import { 
    criarMensagemService, 
    listarMensagensPorMatchService 
} from "../services/MessageService";

export async function criarMensagem(req: Request, res: Response) {
    try {
        await criarMensagemService(req.body);
        return res.status(201).json({ mensagem: "Mensagem enviada com sucesso." });
    } catch (error: any) {
        // Captura o erro de segurança e devolve status 403 (Forbidden / Proibido)
        if (error.message === "Acesso negado: Você não faz parte deste match.") {
            return res.status(403).json({ erro: error.message });
        }
        
        console.error(error);
        return res.status(500).json({ erro: "Erro interno do servidor." });
    }
}

export async function listarMensagensPorMatch(req: Request, res: Response) {
    try {
        const matchId = Number(req.params.matchId);
        if (isNaN(matchId)) {
            return res.status(400).json({ erro: "ID do match inválido." });
        }

        const mensagens = await listarMensagensPorMatchService(matchId);
        return res.status(200).json(mensagens);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: "Erro interno do servidor." });
    }
}