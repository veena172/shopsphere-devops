import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaUser,
  FaHeart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { useSelector } from "react-redux";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);

  const wishlistItems = useSelector(
    (state) => state.wishlist.wishlistItems
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-blue-600"
        >
          ShopSphere
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 font-medium">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link to="/products" className="hover:text-blue-600">
            Products
          </Link>

          <Link to="/login" className="hover:text-blue-600">
            Login
          </Link>

          <Link to="/signup" className="hover:text-blue-600">
            Signup
          </Link>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-6 text-xl">

          {/* Wishlist */}
          <Link to="/wishlist" className="relative">

            <FaHeart className="text-red-500" />

            {wishlistItems.length > 0 && (
              <span className="absolute -top-3 -right-3 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {wishlistItems.length}
              </span>
            )}

          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative">

            <FaShoppingCart />

            {cartItems.length > 0 && (
              <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}

          </Link>

          {/* Profile */}
          <Link to="/profile">
            <FaUser />
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-md">

          <div className="flex flex-col p-5 gap-5">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </Link>

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>

            <Link
              to="/signup"
              onClick={() => setMenuOpen(false)}
            >
              Signup
            </Link>

            <Link
              to="/wishlist"
              onClick={() => setMenuOpen(false)}
            >
              ❤️ Wishlist ({wishlistItems.length})
            </Link>

            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
            >
              🛒 Cart ({cartItems.length})
            </Link>

            <Link
              to="/profile"
              onClick={() => setMenuOpen(false)}
            >
              👤 Profile
            </Link>

          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;