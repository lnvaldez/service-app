const express = require("express");
const viewRoutes = require("./views.routes");
const userRoutes = require("./user.routes");

module.exports = (app) => {
  app.use("/", viewRoutes);
  app.use("/users", userRoutes);
};
