const express = require("express");
const viewRoutes = require("./views.routes");

module.exports = (app) => {
  app.use("/", viewRoutes);
};
