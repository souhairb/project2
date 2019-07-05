const express = require("express");
const router = express.Router();
const university = require("../models/university");

// POST => to create new university and save it to the DB
router.post("/adduniversity", (req, res, next) => {
  const { country, name, location, exchange } = req.body;
  university
    .create({
      country,
      name,
      location,
      exchange
    })
    .then(resDB => {
      res.redirect("/");
    })
    .catch(err => {
      res.redirect("/");
    });
});

router.get("/universities/api", (req, res) => {
  university
    .find()
    .then(dbRes => {
      console.log(dbRes);
      res.status(200).json(dbRes);
    })
    .catch(dbErr => console.log(dbErr));
});

module.exports = router;
