const Cart = require("../models/Cart");

// ================= ADD TO CART =================

const addToCart = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("USER:", req.user);

    const { product, quantity } = req.body;

    if (!product) {
      return res.status(400).json({
        success: false,
        message: "Product is required",
      });
    }

    const existingItem = await Cart.findOne({
      user: req.user.id,
      product,
    });

    console.log("EXISTING:", existingItem);

    if (existingItem) {
      existingItem.quantity += quantity || 1;
      await existingItem.save();

      console.log("UPDATED:", existingItem);

      return res.status(200).json({
        success: true,
        message: "Cart Updated Successfully",
        cart: existingItem,
      });
    }

    const cart = await Cart.create({
      user: req.user.id,
      product,
      quantity: quantity || 1,
    });

    console.log("CART SAVED:", cart);

    res.status(201).json({
      success: true,
      message: "Product Added To Cart",
      cart,
    });

  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= GET MY CART =================

const getCart = async (req, res) => {
  try {
    const cart = await Cart.find({
      user: req.user.id,
    })
      .populate("user", "name email")
      .populate("product", "name price image category");

    res.status(200).json({
      success: true,
      count: cart.length,
      cart,
    });

  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= UPDATE CART =================

const updateCartQuantity = async (req, res) => {
  try {
    const { quantity } = req.body;

    const cart = await Cart.findByIdAndUpdate(
      req.params.id,
      { quantity },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart Item Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Cart Updated Successfully",
      cart,
    });

  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= REMOVE CART ITEM =================

const removeCartItem = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id);

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart Item Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Item Removed From Cart",
    });

  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= CLEAR CART =================

const clearCart = async (req, res) => {
  try {
    await Cart.deleteMany({
      user: req.user.id,
    });

    res.status(200).json({
      success: true,
      message: "Cart Cleared Successfully",
    });

  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addToCart,
  getCart,
  updateCartQuantity,
  removeCartItem,
  clearCart,
};