import { pool } from "../config/database";
import { CreatePreferenceDTO } from "../schemas/preferenceSchema";
import { UserPreference } from "../types/UserPreference";

export async function criarPreferenciaRepository(preferencia: CreatePreferenceDTO) {
    await pool.execute(
        `
        INSERT INTO user_preferences (user_id, interesse)
        VALUES (?, ?)
        `,
        [preferencia.user_id, preferencia.interesse]
    );
}

export async function listarPreferenciasPorUsuarioRepository(userId: number) {
    const [rows] = await pool.execute<UserPreference[]>(
        `
        SELECT id, user_id, interesse
        FROM user_preferences
        WHERE user_id = ?
        `,
        [userId]
    );
    return rows;
}

export async function buscarPreferenciaPorIdRepository(id: number) {
    const [rows] = await pool.execute<UserPreference[]>(
        `
        SELECT * FROM user_preferences WHERE id = ?
        `,
        [id]
    );
    return rows[0] || null;
}

export async function deletarPreferenciaRepository(id: number) {
    await pool.execute(
        `
        DELETE FROM user_preferences WHERE id = ?
        `,
        [id]
    );
}