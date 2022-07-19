const express = require("express");
const app = express();
const dotenv = require("dotenv");
const multer = require("multer");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const commentRoute = require("./routes/comments");
const contactRoute = require("./routes/contact");
const newsLetterRoute = require("./routes/newsLetter");
const tagRoute = require("./routes/tags");
const Path = require("path");

app.name = "ZEP"; // name of the server

dotenv.config();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
app.use(express.json());
app.use(morgan("dev"));
app.path = Path.join(__dirname, "public"); // ruta a la carpeta public
app.use("/assets", express.static(Path.join(__dirname, "/assets")));
app.use(cors());
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB Connected"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
// app.post("/api/upload/:name", upload.single("file"), (req, res) => {
//   res.status(200).json("Archivo actualizado");
// });

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/comments", commentRoute);
app.use("/api/contact", contactRoute);
app.use("/api/newsLetter", newsLetterRoute);
app.use("/api/tags", tagRoute);

// app.listen(3001, () => {
//   console.log("Server started on port 3001");
// });

app.listen(process.env.PORT || 3001);
console.log("server on port", process.env.PORT || 3001);
