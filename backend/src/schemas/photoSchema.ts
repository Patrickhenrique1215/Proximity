import { z } from "zod";

export const createPhotoSchema = z.object({
    user_id: z.number().int().positive("ID do usuário inválido"),
    url: z.string().url("URL da foto inválida"),
    ordem: z.number().int().default(1),
});

export type CreatePhotoDTO = z.infer<typeof createPhotoSchema>;