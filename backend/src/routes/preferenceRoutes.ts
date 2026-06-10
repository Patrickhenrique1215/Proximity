import { Router } from "express";
import { 
    criarPreferencia, 
    listarPreferenciasPorUsuario, 
    deletarPreferencia 
} from "../controllers/PreferenceController";
import { validate } from "../middlewares/validate";
import { createPreferenceSchema } from "../schemas/preferenceSchema";

const router = Router();

router.post("/", validate(createPreferenceSchema), criarPreferencia);
router.get("/usuario/:userId", listarPreferenciasPorUsuario);
router.delete("/:id", deletarPreferencia);

export default router;