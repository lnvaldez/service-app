const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/user.controller");

router.post("/register", register);
router.post("/login", login);

router.get("/login", (req, res) => {
  res.render("pages/login");
});

router.get("/register", (req, res) => {
  res.render("pages/register");
});

module.exports = router;
