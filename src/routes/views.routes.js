const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/index");
});

router.get("/categories", (req, res) => {
  res.render("pages/service-category");
});

router.get("/provider/:id", (req, res) => {
  res.render("pages/service-provider");
});

router.get("/login", (req, res) => {
  res.render("pages/login");
});

router.get("/signup", (req, res) => {
  res.render("pages/register");
});

module.exports = router;
