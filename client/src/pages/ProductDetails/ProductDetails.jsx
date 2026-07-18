import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import API from "../../api/api";
import toast from "react-hot-toast";

import {
  FaStar,
  FaShoppingCart,
  FaHeart,
} from "react-icons/fa";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const { data } = await API.get(`/products/${id}`);
      setProduct(data.product);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load product");
    } finally {
      setLoading(false);
    }
  };

  // ================= ADD TO CART =================

  const handleAddToCart = async () => {
    try {
      await API.post("/cart", {
        product: product._id,
        quantity: 1,
      });

      toast.success("Product Added To Cart 🛒");
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || "Failed to add to cart"
      );
    }
  };

  // ================= ADD TO WISHLIST =================

  const handleWishlist = async () => {
    try {
      await API.post("/wishlist", {
        product: product._id,
      });

      toast.success("Added To Wishlist ❤️");
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || "Failed to add to wishlist"
      );
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <h1 className="text-center text-3xl mt-20">
          Loading...
        </h1>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Navbar />
        <h1 className="text-center text-3xl mt-20">
          Product Not Found
        </h1>
      </>
    );
  }

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
                <span className="text-lg">4.8</span>
              </div>

              <h2 className="text-4xl font-bold text-blue-600 mt-6">
                ₹{product.price}
              </h2>

              <p className="text-gray-600 mt-6 leading-8">
                {product.description}
              </p>

              <p className="mt-4 text-lg font-semibold">
                Stock : {product.stock}
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
                  <FaHeart />
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