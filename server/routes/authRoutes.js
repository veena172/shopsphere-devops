const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
  getProfile,
  getAllUsers,
  deleteUser,
  updateUserRole,
} = require("../controllers/authController");

const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");

// ================= AUTH ROUTES =================

// Register User
router.post("/register", registerUser);

// Login User
router.post("/login", loginUser);

// Get Logged-in User Profile
router.get("/profile", protect, getProfile);

// ================= ADMIN USER ROUTES =================

// Get All Users
router.get("/admin/users", protect, adminOnly, getAllUsers);

// Delete User
router.delete("/admin/users/:id", protect, adminOnly, deleteUser);

// Update User Role
router.put("/admin/users/:id/role", protect, adminOnly, updateUserRole);

module.exports = router;