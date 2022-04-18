import Article from "../models/article.js";
// import allInOne from "../AllInOne.json";

export const getArticles = async (req, res) => {
  try {
    console.log(req.query) // 2000-01-01
    const articles = await Article.find({ pub_date: req.query.date });
    res.json(articles);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

// let startDate = new Date("2000-01-01");
// let endDate = new Date("2020-01-01");

// let allInOne = article_data.filter(function (a) {
//   let hitDates = a.ArticleHits || {};
//   // extract all date strings
//   hitDates = Object.keys(hitDates);
//   // convert strings to Date objcts
//   hitDates = hitDates.map(function (date) { return new Date(date); });
//   // filter this dates by startDate and endDate
//   let hitDateMatches = hitDates.filter(function (date) { return date >= startDate && date <= endDate });
//   // if there is more than 0 results keep it. if 0 then filter it away
//   return hitDateMatches.length > 0;
// });
// console.log(resultArticleData);

export const getArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.findById(id);
    if (article) {
      return res.json(article);
    }
    res.status(404).json({ message: "Product not found!" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};



export const updateArticle = async (req, res) => {
  const { id } = req.params;
  const article = await Article.findByIdAndUpdate(id, req.body);
  res.status(200).json(article);
};

export const deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Article.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Article deleted");
    }
    throw new Error("Article not found");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
