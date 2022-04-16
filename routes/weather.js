import { Router } from "express";
import * as controllers from "../controllers/weather.js";

const router = Router();

router.get("/weather", controllers.getWeathers);
router.get("/weather/:id", controllers.getWeather);
router.post("/weather", controllers.createWeather);
router.put("/weather/:id", controllers.updateWeather);
router.delete("/weather/:id", controllers.deleteWeather);

export default router;
