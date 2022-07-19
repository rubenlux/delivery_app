const routes = require("express");
const router = routes.Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

//UPDATE

router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    // si el id del usuario que quiere modificar es igual al id del usuario que esta logueado
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10); // aca se genera un salt de 10
      req.body.password = await bcrypt.hash(req.body.password, salt); // hasheo la contraseña
    }
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body }, // $set es para actualizar todo el objeto que le pasemos en el body.
        { new: true } // esto es para que retorne el objeto actualizado
      );
      res.status(200).json(updateUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json({ message: "¡Puedes actualizar solo tu cuenta!" });
  }
});

//DELETE

router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    // si el id del usuario que quiere eliminar es igual al id del usuario que esta logueado
    try {
      const user = await User.findById(req.params.id); // busco el usuario por su id
      try {
        //await Post.deleteMany({ username: user.username }); // aca borro todos los posts del usuario
        // await Comment.deleteMany({ username: user.username }); // esto es para borrar los comentarios de ese usuario
        await User.findByIdAndDelete(req.params.id); // aca borro el usuario
        res.status(200).json({ message: "Usuario eliminado" });
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json("Usuario no encontrado");
    }
  } else {
    res.status(401).json({ message: "¡Puedes eliminar solo tu cuenta!" });
  }
});

//GET

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
