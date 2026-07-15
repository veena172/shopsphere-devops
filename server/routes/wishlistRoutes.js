const express = require("express");

const router = express.Router();

const {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
} = require("../controllers/wishlistController");

const protect = require("../middleware/authMiddleware");

// ================= WISHLIST ROUTES =================

// Add To Wishlist
router.post("/", protect, addToWishlist);

// Get My Wishlist
router.get("/", protect, getWishlist);

// Remove From Wishlist
router.delete("/:id", protect, removeFromWishlist);

module.exports = router;