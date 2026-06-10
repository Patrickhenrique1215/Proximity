import { Request, Response } from "express";
import { darLikeService } from "../services/LikeService";
import { listarMatchesPorUsuarioService } from "../services/LikeService";

export async function darLike(req: Request, res: Response) {
    try {
        const resultado = await darLikeService(req.body);
        
        // Se deu match, retornamos um status 201 (Created) com os dados do match
        if (resultado.match) {
            return res.status(201).json(resultado);
        }
        
        // Se foi apenas um like comum, retornamos status 200
        return res.status(200).json(resultado);

    } catch (error: any) {
        if (error.message === "Você não pode dar like em si mesmo.") {
            return res.status(400).json({ erro: error.message });
        }
        console.error(error);
        return res.status(500).json({ erro: "Erro interno do servidor." });
    }
}

export async function listarMatches(req: Request, res: Response) {
    try {
        const userId = Number(req.params.userId);

        if (isNaN(userId)) {
            return res.status(400).json({ erro: "ID do usuário inválido." });
        }

        const matches = await listarMatchesPorUsuarioService(userId);
        return res.status(200).json(matches);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: "Erro interno do servidor." });
    }
}