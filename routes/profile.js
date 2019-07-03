const express = require("express");
const router = new express.Router();
const userModel = require("../models/user");

router.get("/profile", (req, res) => {
  console.log(req.session.currentUser);
  res.render("profile", { profile: req.session.currentUser });
});

module.exports = router;
