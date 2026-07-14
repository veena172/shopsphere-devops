const Cart = require("../models/Cart");

// ================= ADD TO CART =================

const addToCart = async (req, res) => {
  try {
    const { user, product, quantity } = req.body;

    if (!user || !product) {
      return res.status(400).json({
        success: false,
        message: "User and Product are required",
      });
    }

    const existingItem = await Cart.findOne({
      user,
      product,
    });

    if (existingItem) {
      existingItem.quantity += quantity || 1;
      await existingItem.save();

      return res.status(200).json({
        success: true,
        message: "Cart Updated Successfully",
        cart: existingItem,
      });
    }

    const cart = await Cart.create({
      user,
      product,
      quantity: quantity || 1,
    });

    res.status(201).json({
      success: true,
      message: "Product Added To Cart",
      cart,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= GET USER CART =================

const getCart = async (req, res) => {
  try {
    const cart = await Cart.find({
      user: req.params.userId,
    })
      .populate("user", "name email")
      .populate("product", "name price image category");

    res.status(200).json({
      success: true,
      count: cart.length,
      cart,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= UPDATE CART QUANTITY =================

const updateCartQuantity = async (req, res) => {
  try {
    const { quantity } = req.body;

    const cart = await Cart.findByIdAndUpdate(
      req.params.id,
      { quantity },
      {
        returnDocument: "after",
        runValidators: true,
      }
    );

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart item not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Cart Updated Successfully",
      cart,
    });

  } catch (error) {
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
        message: "Cart item not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Item Removed From Cart",
    });

  } catch (error) {
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
      user: req.params.userId,
    });

    res.status(200).json({
      success: true,
      message: "Cart Cleared Successfully",
    });

  } catch (error) {
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