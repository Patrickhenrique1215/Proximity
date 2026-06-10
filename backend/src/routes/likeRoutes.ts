import { Router } from "express";
import { darLike, listarMatches } from "../controllers/LikeController";
import { validate } from "../middlewares/validate";
import { createLikeSchema } from "../schemas/likeSchema";

const router = Router();

router.post("/", validate(createLikeSchema), darLike);

router.get("/usuario/:userId", listarMatches);

export default router;