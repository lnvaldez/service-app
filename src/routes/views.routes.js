const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/categories", (req, res) => {
  res.render("service-category");
});

router.get("/provider/:id", (req, res) => {
  res.render("service-provider");
});

module.exports = router;
