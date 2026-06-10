import { pool } from "../config/database";
import { CreatePhotoDTO } from "../schemas/photoSchema";
import { Photo } from "../types/Photo";

export async function criarFotoRepository(foto: CreatePhotoDTO) {
    await pool.execute(
        `
        INSERT INTO photos (user_id, url, ordem)
        VALUES (?, ?, ?)
        `,
        [foto.user_id, foto.url, foto.ordem]
    );
}

export async function listarFotosPorUsuarioRepository(userId: number) {
    const [rows] = await pool.execute<Photo[]>(
        `
        SELECT id, user_id, url, ordem, status_aprovacao
        FROM photos
        WHERE user_id = ?
        ORDER BY ordem ASC
        `,
        [userId]
    );
    return rows;
}

export async function buscarFotoPorIdRepository(id: number) {
    const [rows] = await pool.execute<Photo[]>(
        `
        SELECT * FROM photos WHERE id = ?
        `,
        [id]
    );
    return rows[0] || null;
}

export async function deletarFotoRepository(id: number) {
    await pool.execute(
        `
        DELETE FROM photos WHERE id = ?
        `,
        [id]
    );
}

export async function obterFotosParaUsuariosRepository(userIds: number[]) {
    if (userIds.length === 0) return [];

    // Cria os placeholders (?, ?, ...) dinamicamente para o IN
    const placeholders = userIds.map(() => "?").join(",");

    const query = `
        SELECT id, user_id, url, ordem 
        FROM photos 
        WHERE user_id IN (${placeholders})
        ORDER BY ordem ASC
    `;

    const [rows] = await pool.execute<RowDataPacket[]>(query, userIds);
    return rows;
}