import { CreateMessageDTO } from "../schemas/messageSchema";
import { 
    criarMensagemRepository, 
    listarMensagensPorMatchRepository 
} from "../repositories/MessageRepository";
import { verificarUsuarioNoMatchRepository } from "../repositories/LikeRepository";

export async function criarMensagemService(mensagem: CreateMessageDTO) {
    // 2. Executa a checagem de segurança
    const usuarioPertenceAoMatch = await verificarUsuarioNoMatchRepository(
        mensagem.match_id, 
        mensagem.sender_id
    );

    // 3. Se não pertencer, barramos na hora lançando um erro estourado
    if (!usuarioPertenceAoMatch) {
        throw new Error("Acesso negado: Você não faz parte deste match.");
    }

    // 4. Se passou, salva a mensagem normalmente
    await criarMensagemRepository(mensagem);
}

export async function listarMensagensPorMatchService(matchId: number) {
    return await listarMensagensPorMatchRepository(matchId);
}