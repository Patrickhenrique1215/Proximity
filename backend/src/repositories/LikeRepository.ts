import { pool } from "../config/database";
import { CreateLikeDTO } from "../schemas/likeSchema";
import { RowDataPacket } from "mysql2";

// 1. Salva o like no banco
export async function salvarLikeRepository(like: CreateLikeDTO) {
    await pool.execute(
        `
        INSERT INTO likes (remetente_id, destinatario_id, tipo)
        VALUES (?, ?, ?)
        `,
        [like.remetente_id, like.destinatario_id, like.tipo]
    );
}

// 2. Verifica se o destinatário já curtiu o remetente de volta
export async function verificarLikeReciprocoRepository(remetenteId: number, destinatarioId: number): Promise<boolean> {
    const [rows] = await pool.execute<RowDataPacket[]>(
        `
        SELECT id FROM likes 
        WHERE remetente_id = ? AND destinatario_id = ? AND tipo = 'LIKE'
        `,
        [destinatarioId, remetenteId]
    );
    return rows.length > 0;
}

// 3. Cria o Match na tabela matches se houver reciprocidade
export async function criarMatchRepository(user1Id: number, user2Id: number) {
    const [result] = await pool.execute(
        `
        INSERT INTO matches (user1_id, user2_id)
        VALUES (?, ?)
        `,
        [user1Id, user2Id]
    );
    
    // Retorna o ID do match gerado para podermos avisar o front-end
    return (result as any).insertId;
}

export async function verificarUsuarioNoMatchRepository(matchId: number, userId: number): Promise<boolean> {
    const [rows] = await pool.execute<RowDataPacket[]>(
        `
        SELECT id FROM matches 
        WHERE id = ? AND (user1_id = ? OR user2_id = ?)
        `,
        [matchId, userId, userId]
    );
    return rows.length > 0;
}

export async function listarMatchesPorUsuarioRepository(userId: number) {
    const query = `
        SELECT 
            m.id AS match_id,
            m.created_at AS match_desde,
            u.id AS usuario_id,
            u.nome,
            u.bio,
            u.cidade
        FROM matches m
        INNER JOIN users u ON (
            (m.user1_id = ? AND m.user2_id = u.id) OR 
            (m.user2_id = ? AND m.user1_id = u.id)
        )
        WHERE u.status = 'ATIVO'
        ORDER BY m.created_at DESC
    `;

    const [rows] = await pool.execute<RowDataPacket[]>(query, [userId, userId]);
    return rows;
}