const express = require("express");

const router = express.Router();

const {
  addToCart,
  getCart,
  updateCartQuantity,
  removeCartItem,
  clearCart,
} = require("../controllers/cartController");

// Add To Cart
router.post("/", addToCart);

// Get User Cart
router.get("/:userId", getCart);

// Update Cart Quantity
router.put("/:id", updateCartQuantity);

// Remove Cart Item
router.delete("/:id", removeCartItem);

// Clear Cart
router.delete("/clear/:userId", clearCart);

module.exports = router;