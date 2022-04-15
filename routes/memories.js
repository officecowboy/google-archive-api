import { Router } from "express";
import * as controllers from "../controllers/memories.js";

const router = Router();

router.get("/memories", controllers.getMemories);
router.get("/memories/:id", controllers.getMemory);
router.post("/memories", controllers.createMemory);
router.put("/memories/:id", controllers.updateMemory);
router.delete("/memories/:id", controllers.deleteMemory);

export default router;