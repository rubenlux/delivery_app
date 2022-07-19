const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      ref: "Category", // referencia a la colección Category
      required: false,
    },
    title: {
      type: String,
      required: true,
      unique: false,
    },
    slug: {
      type: String, // slug is a url friendly version of the title
      required: true,
      unique: true,
    },
    excerpt: {
      type: String,
      required: true,
    },

    img: {
      type: String,
      required: true,
    },

    username: {
      type: String,
      required: true,
    },
    profile_pic: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
