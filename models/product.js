const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const productModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productModel);
module.exports = Product;
