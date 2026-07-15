const express = require("express");

const router = express.Router();

const {
  addToCart,
  getCart,
  updateCartQuantity,
  removeCartItem,
  clearCart,
} = require("../controllers/cartController");

const protect = require("../middleware/authMiddleware");

// ================= CART ROUTES =================

// Add To Cart
router.post("/", protect, addToCart);

// Get My Cart
router.get("/", protect, getCart);

// Update Cart Quantity
router.put("/:id", protect, updateCartQuantity);

// Clear Cart
router.delete("/clear", protect, clearCart);

// Remove Cart Item
router.delete("/:id", protect, removeCartItem);

module.exports = router;