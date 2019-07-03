const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/logout", (req, res) => {
  res.render("index");
});

router.get("/adduniversity", (req, res) => {
  res.render("adduniversity");
});

router.get("/searchuniversity", (req, res) => {
  res.render("searchuniversity");
});

router.get("/filterUni", (req, res) => {
  res.render("searchuniversity");
});

router.get("/university", (req, res) => {
  res.render("university", { layout: false });
});

// router.get("/profile", (req, res) => {
//   res.render("profile");
// });

router.get("/accountinfo", (req, res) => {
  res.render("accountinfo");
});

router.get("/actions", (req, res) => {
  res.render("actions");
});

module.exports = router;
