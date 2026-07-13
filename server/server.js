const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

dotenv.config();

const app = express();

// ================= Database Connection =================
connectDB();

// ================= Middlewares =================
app.use(cors());
app.use(express.json());

// ================= Test Route =================
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "ShopSphere Backend Running Successfully",
  });
});

// ================= Routes =================

// Authentication Routes
app.use("/api/auth", authRoutes);

// Product Routes
app.use("/api/products", productRoutes);

// ================= Server =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(` Server running on Port ${PORT}`);
});