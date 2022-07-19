const routes = require("express");
const router = routes.Router();
const Comment = require("../models/Comment");

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  const newComment = new Comment(req.body); // creamos un nuevo comentario
  try {
    const savedComment = await newComment.save({
      post_id: req.body.post_id,
      name: req.body.name,
      avatar: req.body.avatar,
      email: req.body.email,
      comment: req.body.comment,
    });
    res.status(200).json(savedComment + "Creado");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // :id es el id del post
  try {
    const comment = await Comment.findById(req.params.id); //buscamos el id del comentario
    if (comment.email === req.body.email) {
      // si el email del usuario que está actualizando es el mismo que el que está en la base de datos
      try {
        const updatedComment = await Comment.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedComment + "Actualizado");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("¡Puedes actualizar solo tu comentario!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id); // buscamos el id del comentario
    if (comment.email === req.body.email) {
      // si el email del usuario que está eliminando es el mismo que el que está en la base de datos
      try {
        await comment.delete(); // eliminamos el comentario
        res.status(200).json("El comentario ha sido eliminado...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("¡Puedes eliminar solo tu comentario!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
