import { RowDataPacket } from "mysql2";

export interface Photo extends RowDataPacket {
    id: number;
    user_id: number;
    url: string;
    ordem: number;
    status_aprovacao: string;
}