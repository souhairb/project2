const express = require("express");
const router = express.Router();
const universityModel = require("./../models/university");
const guard = require("./../utils/guard-route");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  universityModel.find().then(dbRes => {
    res.render("signup", { universities: dbRes });
  });
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

router.get("/profile", guard, (req, res) => {
  res.render("profile");
});

router.get("/accountinfo", guard, (req, res) => {
  res.render("accountinfo");
});

router.get("/actions", (req, res) => {
  res.render("actions");
});

module.exports = router;
