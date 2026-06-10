import { Router } from "express";
import { criarMensagem, listarMensagensPorMatch } from "../controllers/MessageController";
import { validate } from "../middlewares/validate";
import { createMessageSchema } from "../schemas/messageSchema";

const router = Router();

router.post("/", validate(createMessageSchema), criarMensagem);
router.get("/match/:matchId", listarMensagensPorMatch);

export default router;