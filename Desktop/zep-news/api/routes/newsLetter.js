const routes = require("express");
const router = routes.Router();
const NewsLetter = require("../models/NewsLetter");

//CREATE NEWSLETTER
router.post("/", async (req, res) => {
  const newNewsLetter = new NewsLetter(req.body);
  try {
    const savedNewsLetter = await newNewsLetter.save({
      email: req.body.email,
    }); //publicación guardada es la publicación que se acaba de crear
    res.status(200).json(savedNewsLetter + "Su email ha sido registrado");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
