import { pool } from "../config/database";
import { CreateUserDTO } from "../schemas/createUserSchema";
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

