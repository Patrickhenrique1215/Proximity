import { RowDataPacket } from "mysql2";

export interface User extends RowDataPacket {
    id: number;
    nome: string;
    email: string;
    senha: string;
    data_nascimento: Date;
    telefone: string | null;
    genero: string | null;
    orient_sexual: string | null;
    cidade: string | null;
    bio: string | null;
    premium: boolean;
    status: string;
    created_at: Date;
}