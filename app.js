require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const hbs = require("hbs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const User = require("./models/User.js");
const University = require("./models/university");

mongoose
  .connect("mongodb://localhost/projet2", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));
hbs.registerPartials(__dirname + "/views/partials");

// default value for title local
app.locals.title = "Express - Generated with IronGenerator";

const index = require("./routes/index");
const authentification = require("./routes/authen");

app.use(authentification);
app.use("/", index);

// function userCreate() {
//   User.create({
//     name: "Gregoire",
//     lastname: "Lescuyer",
//     email: "gregles@g.com",
//     password: "paul"
//   })
//     .then(() => {
//       console.log("user Created");
//     })
//     .catch(err => {
//       console.error("Error creating user", err);
//     });
// }
// userCreate();

// function universityCreate() {
//   University.create({
//     name: "Ironhackbcn",
//     description: "school",
//     location: { type: "Point", coordinates: [2.213213, 42.123423] }
//   })
//     .then(() => {
//       console.log("user Created");
//     })
//     .catch(err => {
//       console.error("Error creating user", err);
//     });
// }
// universityCreate();

module.exports = app;
