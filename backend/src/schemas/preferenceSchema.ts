import { z } from "zod";

export const createPreferenceSchema = z.object({
    user_id: z.number().int().positive("ID do usuário inválido"),
    interesse: z.string().min(2, "O interesse deve ter pelo menos 2 caracteres"),
});

export type CreatePreferenceDTO = z.infer<typeof createPreferenceSchema>;