import { Router } from "express";
import { criarUsuario } from "../controllers/UserController";
import { validate } from "../middlewares/validate"; // 1. Importe o middleware
import { createUserSchema } from "../schemas/createUserSchema"; // 2. Importe o schema

const router = Router();

// 3. Passe o middleware antes do controller
router.post("/", validate(createUserSchema), criarUsuario);

export default router;