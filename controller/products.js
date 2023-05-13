const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  console.log("here in getAllProducts");
  try {
    const AllProducts = await Product.find({});
    return res
      .status(200)
      .json({ message: "success", error: false, data: AllProducts });
  } catch (error) {
    console.log(" Error In getAllProducts", error);
    let errorMessage = error?.message || "Internal Server Error";
    return res.status(500).json({ error: true, message: errorMessage });
  }
};

const createProduct = async (req, res) => {
  try {
    console.log(" req.body.name", req.body.name);
    const product = new Product(req.body);
    const data = await product.save();
    return res.status(200).json({ message: "success", error: false, data });
  } catch (error) {
    console.log(" Error In createProduct", error);
    let errorMessage = error?.message || "Internal Server Error";
    return res.status(500).json({ error: true, message: errorMessage });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res
      .status(200)
      .json({ message: "success", error: false, data: product });
  } catch (error) {
    console.log(" Error In updateProduct", error);
    let errorMessage = error?.message || "Internal Server Error";
    return res.status(500).json({ error: true, message: errorMessage });
  }
};
const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    return res
      .status(200)
      .json({ message: "success", error: false, data: product });
  } catch (error) {
    console.log(" Error In getSingleProduct", error);
    let errorMessage = error?.message || "Internal Server Error";
    return res.status(500).json({ error: true, message: errorMessage });
  }
};

module.exports = {
  getAllProducts,
  updateProduct,
  createProduct,
  getSingleProduct,
};
