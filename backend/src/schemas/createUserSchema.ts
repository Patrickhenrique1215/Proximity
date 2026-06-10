import { z } from "zod";

export const createUserSchema = z.object({
    nome: z
        .string()
        .min(1, "Nome é obrigatório"),

    email: z
        .string()
        .email("E-mail inválido"),

    senha: z
        .string()
        .min(6, "A senha deve ter pelo menos 6 caracteres"),

    data_nascimento: z.string(),

    telefone: z.string().optional(),

    genero: z.string().optional(),

    orient_sexual: z.string().optional(),

    cidade: z.string().optional(),

    bio: z.string().optional(),
});

export type CreateUserDTO = z.infer<typeof createUserSchema>;