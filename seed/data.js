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
  let scrubbedArticles = allArticles.map((article) => {
    return ({
      "abstract": article["abstract"],
      "web_url": article["web_url"],
      "lead_paragraph": article["lead_paragraph"],
      "headline": article["headline"],
      "pub_date": article["pub_date"].split("T")[0],
      "section_name": article["section_name"],
      "byline": article["byline"],
    })
  })

  await Memory.insertMany(memories);
  await Doodles.insertMany(googleDoodles);
  await Weather.insertMany(weather);
  await Article.insertMany(scrubbedArticles);

  await db.close();
};

insertData();
