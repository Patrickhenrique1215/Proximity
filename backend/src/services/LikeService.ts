import { CreateLikeDTO } from "../schemas/likeSchema";
import { 
    salvarLikeRepository, 
    verificarLikeReciprocoRepository, 
    criarMatchRepository 
} from "../repositories/LikeRepository";
import { listarMatchesPorUsuarioRepository } from "../repositories/LikeRepository";

export async function darLikeService(like: CreateLikeDTO) {
    if (like.remetente_id === like.destinatario_id) {
        throw new Error("Você não pode interagir consigo mesmo.");
    }

    // 1. Salva a interação (seja LIKE ou DISLIKE)
    await salvarLikeRepository(like);

    // 2. Se for um DISLIKE, para por aqui. Não tem como dar Match.
    if (like.tipo === "DISLIKE") {
        return {
            match: false,
            mensagem: "Dislike registrado. Perfil ocultado."
        };
    }

    // 3. Se for LIKE, segue a lógica normal de checar o Match
    const deuMatch = await verificarLikeReciprocoRepository(like.remetente_id, like.destinatario_id);

    if (deuMatch) {
        const matchId = await criarMatchRepository(like.remetente_id, like.destinatario_id);
        return {
            match: true,
            match_id: matchId,
            mensagem: "É um Match! Vocês já podem conversar."
        };
    }

    return {
        match: false,
        mensagem: "Like enviado com sucesso."
    };
}

export async function listarMatchesPorUsuarioService(userId: number) {
    return await listarMatchesPorUsuarioRepository(userId);
}