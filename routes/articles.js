import { Router } from "express";
import * as controllers from "../controllers/articles.js";

const router = Router();

router.get("/articles", controllers.getArticles);
router.get("/articles/:id", controllers.getArticle);
router.post("/articles", controllers.createArticle);
router.put("/articles/:id", controllers.updateArticle);
router.delete("/articles/:id", controllers.deleteArticle);

export default router;
