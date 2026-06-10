import { z } from "zod";

export const createMessageSchema = z.object({
    match_id: z.number().int().positive("ID do match inválido"),
    sender_id: z.number().int().positive("ID do remetente inválido"),
    texto: z.string().min(1, "A mensagem não pode estar vazia"),
});

export type CreateMessageDTO = z.infer<typeof createMessageSchema>;