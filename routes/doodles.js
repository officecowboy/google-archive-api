import { Router } from "express";
import * as controllers from "../controllers/doodles.js";

const router = Router();

router.get("/doodles", controllers.getDoodles);
router.get("/doodles/:id", controllers.getDoodle);

export default router;
