function guardRoute(req, res, next) {
  console.log("in guard", req.session);
  if (req.session.currentUser) {
    next();
  } else {
    res.redirect("/login");
  }
}

module.exports = guardRoute;
