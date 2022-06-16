import { Router } from "express";
import * as controllers from "../controllers/articles.js";

const router = Router();

router.get("/articles", controllers.getArticles);
router.get("/articles/:id", controllers.getArticle);

export default router;
