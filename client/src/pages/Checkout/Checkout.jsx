import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Navbar from "../../components/Navbar/Navbar";

import { clearCart } from "../../features/cart/cartSlice";

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);

const subtotal = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);

const shipping = 0;
const tax = Math.round(subtotal * 0.05);
const grandTotal = subtotal + shipping + tax;

const handlePlaceOrder = () => {
  if (cartItems.length === 0) {
    toast.error("Your cart is empty!");
    return;
  }

  dispatch(clearCart());

  toast.success("Order Placed Successfully!");

  navigate("/order-success");
};

  return (
    <>
      <Navbar />

      <section className="bg-slate-100 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h1 className="text-3xl md:text-4xl font-bold mb-10">
            Checkout
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Left Side */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-6">
                Customer Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block mb-2 font-medium">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    City
                  </label>

                  <input
                    type="text"
                    placeholder="Enter city"
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

              </div>

              <div className="mt-6">

                <label className="block mb-2 font-medium">
                  Address
                </label>

                <textarea
                  rows="4"
                  placeholder="Enter full address"
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>

              </div>

              <div className="mt-6">

                <label className="block mb-2 font-medium">
                  Pincode
                </label>

                <input
                  type="text"
                  placeholder="Enter pincode"
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

              {/* Payment */}
              <div className="mt-10">

                <h2 className="text-2xl font-bold mb-5">
                  Payment Method
                </h2>

                <div className="space-y-4">

                  <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer">

                    <input
                      type="radio"
                      value="COD"
                      checked={paymentMethod === "COD"}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value)
                      }
                    />

                    Cash on Delivery

                  </label>

                  <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer">

                    <input
                      type="radio"
                      value="UPI"
                      checked={paymentMethod === "UPI"}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value)
                      }
                    />

                    UPI

                  </label>

                  <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer">

                    <input
                      type="radio"
                      value="Card"
                      checked={paymentMethod === "Card"}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value)
                      }
                    />

                    Credit / Debit Card

                  </label>

                </div>

              </div>

            </div>

            {/* Right Side */}
            <div className="bg-white rounded-2xl shadow-lg p-8 h-fit">

              <h2 className="text-2xl font-bold mb-6">
                Order Summary
              </h2>
              <div className="space-y-4">

  {cartItems.map((item) => (
    <div
      key={item.id}
      className="flex justify-between items-center"
    >
      <div>
        <h3 className="font-medium">
          {item.name}
        </h3>

        <p className="text-sm text-gray-500">
          Qty : {item.quantity}
        </p>
      </div>

      <span className="font-semibold">
        ₹{item.price * item.quantity}
      </span>
    </div>
  ))}

  <hr />

    <div className="flex justify-between">
    <span>Subtotal</span>
    <span>₹{subtotal}</span>
  </div>

  <div className="flex justify-between">
    <span>Shipping</span>
    <span className="text-green-600">
      FREE
    </span>
  </div>

  <div className="flex justify-between">
    <span>Tax (5%)</span>
    <span>₹{tax}</span>
  </div>

  <hr />

  <div className="flex justify-between text-2xl font-bold">

    <span>Total</span>

    <span className="text-blue-600">
      ₹{grandTotal}
    </span>

  </div>

</div>

   <button
  onClick={handlePlaceOrder}
  className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition"
>
  Place Order
</button>


            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default Checkout;