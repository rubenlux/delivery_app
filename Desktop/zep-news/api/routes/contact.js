const routes = require("express");
const router = routes.Router();
const Contact = require("../models/Contact");

//CREATE CONTACT
router.post("/", async (req, res) => {
  const newContact = new Contact(req.body);
  try {
    const savedContact = await newContact.save({
      name: req.body.name,
      subject: req.body.subject,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
    }); //publicación guardada es la publicación que se acaba de crear
    res.status(200).json(savedContact + "su message ha sido enviado");
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
