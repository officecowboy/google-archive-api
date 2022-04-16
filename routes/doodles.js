import { Router } from "express";
import * as controllers from "../controllers/doodles.js";

const router = Router();

router.get("/doodles", controllers.getDoodles);
router.get("/doodles/:id", controllers.getDoodle);
router.post("/doodles", controllers.createDoodle);
router.put("/doodles/:id", controllers.updateDoodle);
router.delete("/doodles/:id", controllers.deleteDoodle);

export default router;
