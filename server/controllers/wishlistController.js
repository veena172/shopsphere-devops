const Wishlist = require("../models/Wishlist");

// ================= ADD TO WISHLIST =================

const addToWishlist = async (req, res) => {
  try {
    const { product } = req.body;

    if (!product) {
      return res.status(400).json({
        success: false,
        message: "Product is required",
      });
    }

    const existingItem = await Wishlist.findOne({
      user: req.user.id,
      product,
    });

    if (existingItem) {
      return res.status(400).json({
        success: false,
        message: "Product already exists in wishlist",
      });
    }

    const wishlist = await Wishlist.create({
      user: req.user.id,
      product,
    });

    res.status(201).json({
      success: true,
      message: "Product Added To Wishlist",
      wishlist,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= GET MY WISHLIST =================

const getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.find({
      user: req.user.id,
    })
      .populate("user", "name email")
      .populate("product", "name price image category");

    res.status(200).json({
      success: true,
      count: wishlist.length,
      wishlist,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= REMOVE FROM WISHLIST =================

const removeFromWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findByIdAndDelete(req.params.id);

    if (!wishlist) {
      return res.status(404).json({
        success: false,
        message: "Wishlist item not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product Removed From Wishlist",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
};