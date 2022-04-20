import db from "../db/connection.js";
import Article from "../models/article.js";
import Memory from "../models/memory.js";
import Doodles from "../models/doodles.js";
import Weather from "../models/weather.js";
import memories from "./memories.json" assert { type: "json" };
import allArticles from "../AllInOne.json" assert { type: "json" };
import googleDoodles from "./googledoodle.json" assert { type: "json" };
import weather from "./weather.json" assert { type: "json" };

const insertData = async () => {
  await db.dropDatabase();

  await Memory.insertMany(memories);
  await Doodles.insertMany(googleDoodles);
  await Weather.insertMany(weather);
  // allArticles is a big file and will crash often if too many pulls
  await Article.insertMany(allArticles);

  await db.close();
};

insertData();
