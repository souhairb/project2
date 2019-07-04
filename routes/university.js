const express = require("express");
const router = express.Router();
const university = require("../models/university");

// POST => to create new university and save it to the DB
router.post("/adduniversity", (req, res, next) => {
  const { country, name, location } = req.body;
  university
    .create({
      country,
      name,
      location
    })
    .then(resDB => {
      res.redirect("/");
    })
    .catch(err => {
      res.redirect("/");
    });

  // add the location object
  // let location = {
  //   type: "Point",
  //   coordinates: [req.body.longitude, req.body.latitude]
  // };
  // const newUniversity = new university({
  //   name: req.body.name,
  //   description: req.body.description,
  //   location: location // <= add the location when creating a new university
  // });
  // newUniversity.save(error => {
  //   if (error) {
  //     next(error);
  //   } else {
  //     res.redirect("/");
  //   }
  // });
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
