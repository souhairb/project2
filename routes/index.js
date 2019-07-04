const express = require("express");
const router = express.Router();
const universityModel = require("./../models/university");
const guard = require("./../utils/guard-route");
const seeds = require("../bin/seed");
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  // console.log(universityModel);
  universityModel
    .find()
    .then(universities => {
      res.render("signup", { universities });
    })
    .catch(err => console.log(err));
});

router.get("/adduniversity", guard, (req, res) => {
  res.render("adduniversity");
});

router.get("/university", guard, (req, res) => {
  res.render("university", { layout: false });
});

router.get("/searchuniversity", guard, (eq, res) => {
  res.render("searchuniversity");
});

router.get("/filterUni", (req, res) => {
  res.render("searchuniversity");
});

// router.get("/profile", guard, (req, res) => {
//   res.render("profile");
// });

router.get("/accountinfo", guard, (req, res) => {
  res.render("accountinfo");
});

router.get("/actions", (req, res) => {
  res.render("actions");
});

router.get("/partners/:id", (req, res) => {
  universityModel
    .findById(req.params.id)
    .then(dbRes => {
      res.render("partners", { university: dbRes });
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
