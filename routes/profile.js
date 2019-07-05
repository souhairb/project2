const express = require("express");
const router = new express.Router();
const userModel = require("../models/user");
const universityModel = require("../models/university");
/* profile */

router.get("/profile", (req, res) => {
  const university = req.session.currentUser.university;
  let avgRate;
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
});

router.post("/profile", (req, res) => {
  const { review, ranking } = req.body;
  const incrementRanking = ranking;
  userModel
    .findByIdAndUpdate(req.session.currentUser._id, { review, ranking })
    .populate("university")
    .then(dbRes => {
      // console.log(dbRes.university._id);
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

// router.get("/editprofile", (req, res) => {
//   userModel
//   .findById(req.params.id)
//   .then(dbRes => {
//     res.render("editprofile", { profile: dbRes });
//   })
//   .catch(dbErr => {
//     res.redirect("/profile");
//   });
// });


// //Step pour modifier les éléments
// app.post("/editprofile", (req, res) => {
//   const sneakermodelname = req.body.sneakermodelname;
//   const sneakerref = req.body.sneakerref;
//   const sneakersize = req.body.sneakersize;
//   const sneakerdescr = req.body.sneakerdescr;
//   const sneakerprice = req.body.sneakerprice;
//   const sneakercategory = req.body.sneakercategory;
//   const sneakertags = req.body.sneakertags;
//   productModel
//     .findByIdAndUpdate(req.params.id, {
//       modelname: sneakermodelname,
//       ref: sneakerref,
//       sizes: sneakersize,
//       description: sneakerdescr,
//       price: sneakerprice,
//       category: sneakercategory,
//       tags: sneakertags
//     })
//     .then(dbRes => {
//       res.redirect("/prod-manage");
//     })
//     .catch(dbErr => {
//       res.render("product_edit", { errorMsg: "Invalid Value" });
//     });
// });







module.exports = router;
