const routes = require("express");
const router = routes.Router();
const Tag = require("../models/Tags");

//created a new tag
router.post("/", async (req, res) => {
  const newTag = new Tag(req.body);
  try {
    const savedTag = await newTag.save();
    res.status(200).json(savedTag + "Creado");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all tags
router.get("/", async (req, res) => {
  try {
    const tags = await Tag.find();
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
