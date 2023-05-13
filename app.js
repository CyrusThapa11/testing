const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./db/connection");

const productsRoute = require("./routes/products.js");

app.use("/api/product", productsRoute);

if (!module.parent) {
  app.listen(4444, () => {
    console.log("on http://localhost:4444/");
  });
}
module.exports = app;
