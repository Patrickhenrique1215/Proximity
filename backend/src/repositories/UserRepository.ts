import { pool } from "../config/database";
import { CreateUserDTO } from "../schemas/createUserSchema";
import { UpdateUserDTO } from "../schemas/updateUserSchema"; 
import { User } from "../types/User";

export async function buscarUsuarioPorEmail(email: string) {

    const [rows] = await pool.execute<User[]>(
        `
        SELECT *
        FROM users
        WHERE email = ?
        `,
        [email]
    );

    return rows;

}

export async function criarUsuarioRepository(
    usuario: CreateUserDTO
) {

    await pool.execute(
        `
        INSERT INTO users (
            nome,
            email,
            senha,
            data_nascimento,
            telefone,
            genero,
            orient_sexual,
            cidade,
            bio
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,
        [
            usuario.nome,
            usuario.email,
            usuario.senha,
            usuario.data_nascimento,
            usuario.telefone,
            usuario.genero,
            usuario.orient_sexual,
            usuario.cidade,
            usuario.bio,
        ]
    );

}

export async function buscarUsuarioPorId(id: number) {
    const [rows] = await pool.execute<User[]>(
        `
        SELECT id, nome, email, data_nascimento, telefone, genero, orient_sexual, cidade, bio, premium, status, created_at
        FROM users
        WHERE id = ?
        `,
        [id]
    );

    return rows[0] || null; // Retorna o usuário ou null se não achar
}

export async function listarUsuariosRepository() {
    // Para a listagem, nunca traga o campo 'senha' por segurança!
    const [rows] = await pool.execute<User[]>(
        `
        SELECT id, nome, data_nascimento, genero, orient_sexual, cidade, bio, premium
        FROM users
        WHERE status = 'ATIVO'
        `
    );

    return rows;
}

export async function atualizarUsuarioRepository(id: number, dados: UpdateUserDTO) {
    await pool.execute(
        `
        UPDATE users 
        SET nome = ?, telefone = ?, genero = ?, orient_sexual = ?, cidade = ?, bio = ?
        WHERE id = ?
        `,
        [
            dados.nome,
            dados.telefone || null,
            dados.genero || null,
            dados.orient_sexual || null,
            dados.cidade || null,
            dados.bio || null,
            id
        ]
    );
}

export async function deletarUsuarioRepository(id: number) {
    await pool.execute(
        `
        UPDATE users 
        SET status = 'INATIVO' 
        WHERE id = ?
        `,
        [id]
    );
}

export async function obterFeedRepository(userId: number, preferencias: string[]) {
    // Se o usuário não tiver nenhuma preferência configurada ainda, evitamos que a query quebre
    if (preferencias.length === 0) {
        return [];
    }

    // Criamos os placeholders (?, ?, ...) dinamicamente de acordo com o número de preferências
    const placeholders = preferencias.map(() => "?").join(",");

    const query = `
        SELECT id, nome, bio, cidade, genero, data_nascimento
        FROM users
        WHERE status = 'ATIVO'
          AND id != ?
          AND genero IN (${placeholders})
          AND id NOT IN (
              SELECT destinatario_id 
              FROM likes 
              WHERE remetente_id = ?
          )
        ORDER BY RAND()
        LIMIT 20
    `;

    // Montamos o array de parâmetros na ordem exata dos '?' na query:
    // 1. O id do usuário logado (para id != ?)
    // 2. As strings das preferências (para o IN)
    // 3. O id do usuário logado de novo (para o sub-select dos likes)
    const params = [userId, ...preferencias, userId];

    const [rows] = await pool.execute<User[]>(query, params);
    return rows;
}