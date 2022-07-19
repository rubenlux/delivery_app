const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    post_id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: false,
      default: "",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Comment", CommentSchema);

// CommentSchema.virtual("image")//virtual para que no se guarde en la base de datos
//   .set(function (image) {//set para que se guarde en la base de datos
//     this._image = image;//guardamos la imagen en una variable privada
//   })
//   .get(function () {//get para que se muestre en la base de datos
//     return this._image;//retornamos la variable privada
//   });
