import { RowDataPacket } from "mysql2";

export interface UserPreference extends RowDataPacket {
    id: number;
    user_id: number;
    interesse: string;
}