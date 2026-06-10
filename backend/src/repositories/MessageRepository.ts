import { pool } from "../config/database";
import { CreateMessageDTO } from "../schemas/messageSchema";
import { Message } from "../types/Message";

export async function criarMensagemRepository(mensagem: CreateMessageDTO) {
    await pool.execute(
        `
        INSERT INTO messages (match_id, sender_id, texto)
        VALUES (?, ?, ?)
        `,
        [mensagem.match_id, mensagem.sender_id, mensagem.texto]
    );
}

export async function listarMensagensPorMatchRepository(matchId: number) {
    const [rows] = await pool.execute<Message[]>(
        `
        SELECT id, match_id, sender_id, texto, created_at
        FROM messages
        WHERE match_id = ?
        ORDER BY created_at ASC
        `,
        [matchId]
    );
    return rows;
}