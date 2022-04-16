import { Router } from "express";
import articlesRoutes from "./articles.js";
import memoriesRoutes from "./memories.js";
import weatherRoutes from "./weather.js";
import doodlesRoutes from "./doodles.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/", articlesRoutes);

router.use("/", weatherRoutes);

router.use("/", doodlesRoutes);

router.use("/", memoriesRoutes);

export default router;
