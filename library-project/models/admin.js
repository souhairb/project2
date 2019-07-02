const express = require("express");
const router = new express.Router();

const User = require("../models/User.js");

const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.post("/signup", (req, res) => {
 const { name, lastname, email, password } = req.body;
 const salt = bcrypt.genSaltSync(bcryptSalt);
 const hashPass = bcrypt.hashSync(password, salt);
 User.create({
   name,
   lastname,
   email,
   password: hashPass
 })
   .then(resDB => {
     res.redirect("/");
   })
   .catch(err => {
     res.redirect("/");
   });
});

module.exports = router;