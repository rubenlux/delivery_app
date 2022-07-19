const routes = require("express");
const router = routes.Router();
const Post = require("../models/Post");
const User = require("../models/User");
const Comment = require("../models/Comment");

//CREATE POST
router.post("/", async (req, res) => {
  const newPost = new Post({
    category: req.body.category,
    title: req.body.title,
    slug: req.body.slug,
    excerpt: req.body.excerpt,
    img: req.body.img,
    username: req.body.username,
    profile_pic: req.body.profile_pic,
    description: req.body.desc,
  });
  try {
    const savedPost = await newPost.save();

    res.status(200).json(savedPost + "Creado");
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost + "Actualizado");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("¡Puedes actualizar solo tu publicación!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("La publicación ha sido eliminada...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("¡Puedes eliminar solo tu publicación!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  const title = req.query.title;
  try {
    let posts;
    if (username) {
      //si se pasa el parámetro user, se filtra por username
      posts = await Post.find({ username });
    } else if (catName) {
      //si se pasa el parámetro cat, se filtra por category
      posts = await Post.find({
        categories: {
          $in: [catName], // aca se busca en el array de categorias
        },
      });
    } else if (title) {
      // si se pasa el parámetro title, se filtra por title
      posts = await Post.find({
        title: {
          $regex: title, // regex para buscar por palabras
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  const title = req.query.title;
  try {
    let posts;
    if (title) {
      //si se pasa el parámetro title, se filtra por title
      posts = await Post.find({
        title: {
          $regex: title, // regex para buscar por palabras
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
