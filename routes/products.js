const router = require("express").Router();

const {
  getAllProducts,
  updateProduct,
  createProduct,
  getSingleProduct,
} = require("../controller/products");

router.get("/", getAllProducts);
router.post("/", createProduct);
router.patch("/:id", updateProduct);
router.get("/:id", getSingleProduct);

module.exports = router;
