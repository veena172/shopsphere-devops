const express = require("express");

const router = express.Router();

const {
  addProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts,
  getProductsByCategory,
} = require("../controllers/productController");

// Search Product
router.get("/search", searchProducts);

// Category Filter
router.get("/category/:category", getProductsByCategory);

// Add Product
router.post("/", addProduct);

// Get All Products
router.get("/", getProducts);

// Get Product By ID
router.get("/:id", getProductById);

// Update Product
router.put("/:id", updateProduct);

// Delete Product
router.delete("/:id", deleteProduct);

module.exports = router;