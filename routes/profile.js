const express = require("express");
const router = new express.Router();
const userModel = require("../models/user");
const guard = require("./../utils/guard-route");
const universityModel = require("../models/university");
/* profile */

router.get("/profile", guard, (req, res) => {
  // const university = req.session.currentUser.university;
  universityModel
    .findById(req.session.currentUser.university._id)
    .then(university => {
      let avgRate;
      // console.log("revenu par la", req.session.currentUser);
      if (university.rating) {
        avgRate = Math.ceil(university.rating / university.voters);
      } else {
        avgRate = 0;
      }
      // console.log(avgRate);
      res.render("profile", {
        hasRanked: Boolean(
          req.session.currentUser.ranking && req.session.currentUser.review
        ),
        profile: req.session.currentUser,
        avgRate,
        scripts: ["rating.js"]
      });
    })
    .catch(err => console.log(err));
});

router.post("/profile", (req, res) => {
  const { review, ranking } = req.body;
  const incrementRanking = ranking;
  userModel
    .findByIdAndUpdate(req.session.currentUser._id, { review, ranking })
    .populate("university")
    .then(updatedUser => {
      // console.log(dbRes.university._id);
      req.session.currentUser.review = review;
      req.session.currentUser.ranking = ranking;
      universityModel
        .findByIdAndUpdate(updatedUser.university._id, {
          $inc: { voters: 1, rating: incrementRanking }
        })
        .then(success => {
          // req.session.currentUser = updatedUser;
          res.redirect("/profile");
        })
        .catch(failure => console.log(failure));
    })
    .catch(err => console.log(err));
});

router.get("/editprofile", guard, (req, res) => {
  console.log("user", req.session.currentUser._id);
  userModel
    .findById(req.session.currentUser._id)
    .then(dbRes => {
      res.render("editprofile", { profile: dbRes });
    })
    .catch(dbErr => {
      res.redirect("/profile");
    });
});

//Step pour modifier les éléments
router.post("/editprofile", (req, res) => {
  const name = req.body.name;
  const lastname = req.body.lastname;
  userModel
    .findByIdAndUpdate(req.session.currentUser._id, { name, lastname })
    .then(dbRes => {
      console.log("ici edit ok");
      res.redirect("/profile");
    })
    .catch(dbErr => {
      console.log("err");
      res.render("editprofile", { errorMsg: "Invalid Value" });
    });
});
module.exports = router;
