import Navbar from "../../components/Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../features/cart/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Total Price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Total Items
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Shipping & Tax
  const shipping = 0;
  const tax = Math.round(totalPrice * 0.05);

  // Final Total
  const grandTotal = totalPrice + shipping + tax;

  return (
    <>
      <Navbar />

      <section className="bg-slate-100 min-h-screen py-10">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-4xl font-bold mb-8">
            Shopping Cart
          </h1>

          {cartItems.length === 0 ? (
            <div className="bg-white rounded-xl shadow p-10 text-center">
              <h2 className="text-2xl font-semibold">
                Your Cart is Empty 🛒
              </h2>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="space-y-6">

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl shadow p-5 flex justify-between items-center"
                  >

                    <div className="flex items-center gap-5">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-28 h-28 rounded-xl object-cover"
                      />

                      <div>

                        <h2 className="text-xl font-semibold">
                          {item.name}
                        </h2>

                        <p className="text-blue-600 text-xl font-bold mt-2">
                          ₹{item.price}
                        </p>

                        {/* Quantity */}
                        <div className="flex items-center gap-4 mt-4">

                          <button
                            onClick={() =>
                              dispatch(decreaseQuantity(item.id))
                            }
                            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg text-xl"
                          >
                            -
                          </button>

                          <span className="text-xl font-bold">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              dispatch(increaseQuantity(item.id))
                            }
                            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg text-xl"
                          >
                            +
                          </button>

                        </div>

                      </div>

                    </div>

                    <button
                      onClick={() =>
                        dispatch(removeFromCart(item.id))
                      }
                      className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl"
                    >
                      Remove
                    </button>

                  </div>
                ))}

              </div>

              {/* Checkout Summary */}
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
                  className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition"
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