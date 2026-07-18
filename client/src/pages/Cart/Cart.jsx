import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import API from "../../api/api";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";

function Cart() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [removingId, setRemovingId] = useState(null);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const { data } = await API.get("/cart");

      console.log("CART RESPONSE =>", data);

      setCartItems(data.cart || []);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch cart");
    } finally {
      setLoading(false);
    }
  };

  // ================= REMOVE FROM CART =================

  const handleRemove = async (itemId) => {
    try {
      setRemovingId(itemId);

      await API.delete(`/cart/${itemId}`);

      // Remove from local state immediately, no need to refetch everything
      setCartItems((prev) =>
        prev.filter((item) => item._id !== itemId)
      );

      toast.success("Item Removed From Cart");
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || "Failed to remove item"
      );
    } finally {
      setRemovingId(null);
    }
  };

  const validCartItems = cartItems.filter((item) => item.product);

  const totalPrice = validCartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const totalItems = validCartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const shipping = 0;
  const tax = Math.round(totalPrice * 0.05);
  const grandTotal = totalPrice + shipping + tax;

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

  return (
    <>
      <Navbar />

      <section className="bg-slate-100 min-h-screen py-10">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-4xl font-bold mb-8">
            Shopping Cart
          </h1>

          {validCartItems.length === 0 ? (
            <div className="bg-white rounded-xl shadow p-10 text-center">
              <h2 className="text-2xl font-semibold">
                Your Cart is Empty 🛒
              </h2>
            </div>
          ) : (
            <>
              <div className="space-y-6">

                {validCartItems.map((item) => (
                  <div
                    key={item._id}
                    className="bg-white rounded-2xl shadow p-5 flex justify-between items-center"
                  >
                    <div className="flex items-center gap-5">

                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-28 h-28 rounded-xl object-cover"
                      />

                      <div>
                        <h2 className="text-xl font-semibold">
                          {item.product.name}
                        </h2>

                        <p className="text-blue-600 text-xl font-bold mt-2">
                          ₹{item.product.price}
                        </p>

                        <p className="mt-3">
                          Quantity : {item.quantity}
                        </p>
                      </div>

                    </div>

                    <button
                      onClick={() => handleRemove(item._id)}
                      disabled={removingId === item._id}
                      className="flex items-center gap-2 bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white px-5 py-3 rounded-xl font-semibold transition"
                    >
                      <FaTrash />
                      {removingId === item._id ? "Removing..." : "Remove"}
                    </button>

                  </div>
                ))}

              </div>

              <div className="bg-white rounded-2xl shadow p-8 mt-10">

                <h2 className="text-3xl font-bold mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 text-lg">

                  <div className="flex justify-between">
                    <span>Total Items</span>
                    <span>{totalItems}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{totalPrice}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600 font-semibold">
                      FREE
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Tax (5%)</span>
                    <span>₹{tax}</span>
                  </div>

                  <hr />

                  <div className="flex justify-between text-2xl font-bold">
                    <span>Grand Total</span>
                    <span className="text-blue-600">
                      ₹{grandTotal}
                    </span>
                  </div>

                </div>

                <button
                  onClick={() => navigate("/checkout")}
                  className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold"
                >
                  Proceed To Checkout
                </button>

              </div>
            </>
          )}

        </div>
      </section>
    </>
  );
}

export default Cart;
