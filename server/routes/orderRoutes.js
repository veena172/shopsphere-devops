const express = require("express");

const router = express.Router();

const {
  placeOrder,
  getMyOrders,
  getOrderById,
  getAllOrders,
  updateOrderStatus,
} = require("../controllers/orderController");

const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");

// ================= USER ORDER ROUTES =================

// Place Order
router.post("/", protect, placeOrder);

// Get Logged-in User Orders
router.get("/", protect, getMyOrders);

// ================= ADMIN ORDER ROUTES =================

// Get All Orders
router.get("/admin/all", protect, adminOnly, getAllOrders);

// Update Order Status
router.put(
  "/admin/:id/status",
  protect,
  adminOnly,
  updateOrderStatus
);

// ================= SINGLE ORDER =================

// Get Order By ID (Always keep this LAST)
router.get("/:id", protect, getOrderById);

module.exports = router;