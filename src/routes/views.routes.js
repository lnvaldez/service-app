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

module.exports = router;
