import { createSlice } from "@reduxjs/toolkit";

// Load Wishlist from Local Storage
const savedWishlist =
  JSON.parse(localStorage.getItem("wishlist")) || [];

const initialState = {
  wishlistItems: savedWishlist,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,

  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.wishlistItems.find(
        (item) => item.id === action.payload.id
      );

      if (!exists) {
        state.wishlistItems.push(action.payload);
      }

      localStorage.setItem(
        "wishlist",
        JSON.stringify(state.wishlistItems)
      );
    },

    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem(
        "wishlist",
        JSON.stringify(state.wishlistItems)
      );
    },

    clearWishlist: (state) => {
      state.wishlistItems = [];
      localStorage.removeItem("wishlist");
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;