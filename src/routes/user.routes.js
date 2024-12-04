const express = require("express");
const router = express.Router();

const { register, login, logout } = require("../controllers/user.controller");

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

router.get("/login", (req, res) => {
  res.render("pages/login");
});

router.get("/register", (req, res) => {
  res.render("pages/register");
});

module.exports = router;
