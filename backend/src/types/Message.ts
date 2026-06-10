import { RowDataPacket } from "mysql2";

export interface Message extends RowDataPacket {
    id: number;
    match_id: number;
    sender_id: number;
    texto: string;
    created_at: Date;
}