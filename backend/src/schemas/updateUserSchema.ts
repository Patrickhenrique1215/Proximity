import { z } from "zod";

export const updateUserSchema = z.object({
    nome: z.string().min(1, "Nome não pode ser vazio"),
    telefone: z.string().optional(),
    genero: z.string().optional(),
    orient_sexual: z.string().optional(),
    cidade: z.string().optional(),
    bio: z.string().optional(),
});

export type UpdateUserDTO = z.infer<typeof updateUserSchema>;