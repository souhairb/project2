const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

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

module.exports = router;

