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

const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");

// ================= PUBLIC ROUTES =================

// Search Products
router.get("/search", searchProducts);

// Category Filter
router.get("/category/:category", getProductsByCategory);

// Get All Products
router.get("/", getProducts);

// Get Product By ID
router.get("/:id", getProductById);

// ================= ADMIN ROUTES =================

// Add Product
router.post("/", protect, adminOnly, addProduct);

// Update Product
router.put("/:id", protect, adminOnly, updateProduct);

// Delete Product
router.delete("/:id", protect, adminOnly, deleteProduct);

module.exports = router;