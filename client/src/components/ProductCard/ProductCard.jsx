import { Link } from "react-router-dom";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import { addToCart } from "../../features/cart/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../features/wishlist/wishlistSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const wishlistItems = useSelector(
    (state) => state.wishlist.wishlistItems
  );

  const isWishlisted = wishlistItems.some(
    (item) => item.id === product.id
  );

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart 🛒`);
  };

  const handleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(product.id));
      toast.success("Removed from Wishlist 💔");
    } else {
      dispatch(addToWishlist(product));
      toast.success("Added to Wishlist ❤️");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group">

      {/* Product Image */}
      <div className="relative overflow-hidden">

        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
          />
        </Link>

        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          {product.category}
        </span>

        {/* Wishlist */}
        <button
          onClick={handleWishlist}
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-red-500 hover:text-white transition"
        >
          {isWishlisted ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart />
          )}
        </button>

      </div>

      {/* Product Details */}
      <div className="p-5">

        <Link to={`/product/${product.id}`}>
          <h3 className="text-xl font-semibold hover:text-blue-600 transition">
            {product.name}
          </h3>
        </Link>

        <div className="flex justify-between items-center mt-3">

          <span className="text-2xl font-bold text-blue-600">
            ₹{product.price}
          </span>

          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar />
            <span>{product.rating}</span>
          </div>

        </div>

        <button
          onClick={handleAddToCart}
          className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-2 transition"
        >
          <FaShoppingCart />
          Add To Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;