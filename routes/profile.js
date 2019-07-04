const express = require("express");
const router = new express.Router();
const userModel = require("../models/user");
const universityModel = require("../models/university");
/* profile */
router.get("/profile", (req, res) => {
  console.log(req.session);
  res.render("profile", {
    hasRanked: Boolean(
      req.session.currentUser.ranking && req.session.currentUser.review
    ),
    profile: req.session.currentUser,
    scripts: ["rating.js"]
  });
});

router.post("/profile", (req, res) => {
  const { review, ranking } = req.body;
  const incrementRanking = ranking;
  userModel
    .findByIdAndUpdate(req.session.currentUser._id, { review, ranking })
    .populate("university")
    .then(dbRes => {
      console.log(dbRes.university._id);
      universityModel
        .findByIdAndUpdate(dbRes.university._id, {
          $inc: { voters: 1, rating: incrementRanking }
        })
        .then(success => {
          res.redirect("/profile");
        })
        .catch(failure => console.log(failure));
    })
    .catch(err => console.log(err));
});

module.exports = router;
