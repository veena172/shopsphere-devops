import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";

function OrderSuccess() {
  return (
    <>
      <Navbar />

      <section className="bg-slate-100 min-h-screen flex items-center justify-center px-4">

        <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-lg w-full text-center">

          <CheckCircle
            size={90}
            className="mx-auto text-green-500"
          />

          <h1 className="text-4xl font-bold mt-6">
            Order Placed Successfully!
          </h1>

          <p className="text-gray-500 mt-5 leading-7">
            Thank you for shopping with
            <span className="font-semibold text-blue-600">
              {" "}ShopSphere
            </span>.
            <br />
            Your order has been confirmed and will be delivered soon.
          </p>

          <Link to="/">
            <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition">
              Continue Shopping
            </button>
          </Link>

        </div>

      </section>
    </>
  );
}

export default OrderSuccess;