const express = require("express");
const router = new express.Router();
const userModel = require("../models/user");

/* profile */
router.get("/profile", (req, res) => {
  res.render("profile", {
    profile: req.session.currentUser,
    scripts: ["rating.js"]
  });
});

router.post("/profile", (req, res) => {
  const { review, ranking } = req.body;

  userModel
    .findById(req.session.currentUser._id)
    .then(user => {
      console.log(user.name);
      userModel
        .update({ review, ranking })
        .then(dbRes => {
          console.log("OK C BON");
          res.redirect("/profile");
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});

module.exports = router;
