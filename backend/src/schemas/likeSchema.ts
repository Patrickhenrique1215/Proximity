import { z } from "zod";

export const createLikeSchema = z.object({
    remetente_id: z.number().int().positive("ID do remetente inválido"),
    destinatario_id: z.number().int().positive("ID do destinatário inválido"),
    tipo: z.enum(["LIKE", "DISLIKE"]).default("LIKE") // <-- Nova validação
});

export type CreateLikeDTO = z.infer<typeof createLikeSchema>;