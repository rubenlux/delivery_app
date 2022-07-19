const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      ref: "Post", // referencia a la colección Post
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
