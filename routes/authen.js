const express = require("express");
const User = require("../models/user");
const router = new express.Router();
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

/* signup */
router.post("/signup", (req, res) => {
  // return console.log(req.body);
  const { name, lastname, email, password, university } = req.body;
  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);
  User.create({
    name,
    lastname,
    email,
    university,
    password: hashPass
  })
    .then(resDB => {
      res.redirect("/");
    })
    .catch(err => {
      res.redirect("/");
    });
});

/* login */
router.post("/login", (req, res, next) => {
  const theEmail = req.body.email;
  const thePassword = req.body.password;
  if (theEmail === "" || thePassword === "") {
    res.render("/login", {
      errorMessage: "Please enter both, username and password to sign up."
    });
    return;
  }
  User.findOne({ email: theEmail })
    .populate("university")
    .then(user => {
      if (!user) {
        res.render("login", {
          errorMessage: "The username doesn't exist."
        });
        return;
      }
      if (bcrypt.compareSync(thePassword, user.password)) {
        req.session.currentUser = user;
        console.log("yata !", user);
        console.log(req.session.currentUser);
        res.redirect("/");
      } else {
        res.render("login", {
          errorMessage: "Incorrect password"
        });
      }
    })
    .catch(error => {
      next(error);
    });
});
router.post("/signup", (req, res) => {
  res.render("/signup");
});

router.get("/logout", (req, res, next) => {
  req.session.destroy(err => {
    console.log("SESSION TERMIAQTED");
    res.redirect("/");
  });
});

// router.use((req, res, next) => {
//   if (req.session.currentUser) {
//     next();
//   } else {
//     res.redirect("/login");
//   }
// });

module.exports = router;
