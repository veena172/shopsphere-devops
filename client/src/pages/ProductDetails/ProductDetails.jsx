import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import products from "../../data/products";

import {
  FaStar,
  FaShoppingCart,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import { addToCart } from "../../features/cart/cartSlice";

import {
  addToWishlist,
  removeFromWishlist,
} from "../../features/wishlist/wishlistSlice";

function ProductDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const wishlistItems = useSelector(
    (state) => state.wishlist.wishlistItems
  );

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <>
        <Navbar />
        <h1 className="text-center text-4xl mt-20">
          Product Not Found
        </h1>
      </>
    );
  }

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
    <>
      <Navbar />

      <section className="bg-slate-100 min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-lg grid md:grid-cols-2 gap-10 p-8">

            {/* Product Image */}
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[500px] object-cover rounded-2xl"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-center">

              <span className="bg-blue-600 text-white px-4 py-2 rounded-full w-fit">
                {product.category}
              </span>

              <h1 className="text-5xl font-bold mt-5">
                {product.name}
              </h1>

              <div className="flex items-center gap-2 text-yellow-500 mt-5">
                <FaStar />
                <span className="text-lg">
                  {product.rating}
                </span>
              </div>

              <h2 className="text-4xl font-bold text-blue-600 mt-6">
                ₹{product.price}
              </h2>

              <p className="text-gray-600 mt-6 leading-8">
                Premium quality fashion product designed with
                comfort, style and durability. Perfect for daily
                wear and special occasions.
              </p>

              <div className="flex gap-5 mt-8">

                <button
                  onClick={handleAddToCart}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl flex items-center gap-2 transition"
                >
                  <FaShoppingCart />
                  Add To Cart
                </button>

                <button
                  onClick={handleWishlist}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl flex items-center gap-2 transition"
                >
                  {isWishlisted ? (
                    <FaHeart />
                  ) : (
                    <FaRegHeart />
                  )}

                  Wishlist
                </button>

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default ProductDetails;