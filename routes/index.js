import { Router } from "express";
import articlesRoutes from "./articles.js";
import memoriesRoutes from "./memories.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/", articlesRoutes);

router.use("/", memoriesRoutes);

export default router;