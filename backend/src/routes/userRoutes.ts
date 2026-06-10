import { Router } from "express";
import { criarUsuario, obterUsuarioPorId, listarUsuarios, 
    atualizarUsuario,
    deletarUsuario,
    obterFeed } from "../controllers/UserController";
import { validate } from "../middlewares/validate"; // 1. Importe o middleware
import { createUserSchema } from "../schemas/createUserSchema"; // 2. Importe o schema
import { updateUserSchema } from "../schemas/updateUserSchema";

const router = Router();

// 3. Passe o middleware antes do controller
router.post("/", validate(createUserSchema), criarUsuario);
router.get("/", listarUsuarios);          // GET /users (Lista todo mundo)
router.get("/:id", obterUsuarioPorId);    // GET /users/1 (Busca um específico)
router.put("/:id", validate(updateUserSchema), atualizarUsuario);
router.delete("/:id", deletarUsuario);
router.get("/:userId/feed", obterFeed);

export default router;