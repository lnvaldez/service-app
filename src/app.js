const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();

const routes = require("./routes");

app.use(expressLayouts);
app.use(express.json());
app.use(express.static("public/styles"));

app.set("view engine", "ejs");
app.set("layout", "layout/main");

routes(app);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
