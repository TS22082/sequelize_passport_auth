const express = require("express");
const db = require("../models");
const passport = require("../config/passport");
const router = express.Router();

router.get("/api", (req, res) => {
  res.send({ msg: "success" });
});

router.post("/api/login", passport.authenticate("local"), (req, res) => {
  res.json({ email: req.user.email, id: req.user.id });
});

router.post("/api/signup", (req, res) => {
  db.User.create({ email: req.body.email, password: req.body.password })
    .then(() => {
      res.redirect(307, "/api/login");
    })
    .catch((err) => res.status(401).json(err));
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/api/user_data", (req, res) => {
  !req.user
    ? res.json({})
    : res.json({
        email: req.user.email,
        id: req.user.id,
      });
});

module.exports = router;
