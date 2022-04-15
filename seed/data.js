import memories from "../controllers/memories.js";
import db from "../db/connection.js";
import Article from "../models/article.js";
import Memory from "../models/memory.js";
import memories from "./memories.json" assert { type: "json" };
import articles from "./article.json" assert { type: "json" };

const insertData = async () => {

  db.dropDatabase();

  await Article.insertMany(articles);

  await Memory.insertMany(memories);

  db.close();
};

insertData();