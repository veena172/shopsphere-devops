const express = require("express");

const router = express.Router();

const {
  placeOrder,
  getMyOrders,
  getOrderById,
} = require("../controllers/orderController");

const protect = require("../middleware/authMiddleware");

// ================= ORDER ROUTES =================

// Place Order
router.post("/", protect, placeOrder);

// Get My Orders
router.get("/", protect, getMyOrders);

// Get Order By ID
router.get("/:id", protect, getOrderById);

module.exports = router;