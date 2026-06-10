import { Request, Response } from "express";
import { criarUsuarioService } from "../services/UserService";

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