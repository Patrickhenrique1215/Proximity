import { Router } from "express";
import { criarFoto, listarFotosPorUsuario, deletarFoto } from "../controllers/PhotoController";
import { validate } from "../middlewares/validate";
import { createPhotoSchema } from "../schemas/photoSchema";

const router = Router();

router.post("/", validate(createPhotoSchema), criarFoto);
router.get("/usuario/:userId", listarFotosPorUsuario);
router.delete("/:id", deletarFoto);

export default router;