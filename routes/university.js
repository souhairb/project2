const express = require("express");
const router = express.Router();
const university = require("../models/university");

// POST => to create new university and save it to the DB
router.post("/", (req, res, next) => {
  // add the location object
  let location = {
    type: "Point",
    coordinates: [req.body.longitude, req.body.latitude]
  };

  const newUniversity = new university({
    name: req.body.name,
    description: req.body.description,
    location: location // <= add the location when creating a new university
  });

  newUniversity.save(error => {
    if (error) {
      next(error);
    } else {
      res.redirect("/");
    }
  });
});

module.exports = router;
