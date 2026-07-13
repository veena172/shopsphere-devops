import { ArrowRight, ShoppingBag } from "lucide-react";

function Hero() {
  return (
    <section className="min-h-[90vh] bg-gradient-to-r from-slate-50 via-blue-50 to-white flex items-center py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left Side */}
        <div className="text-center lg:text-left">

          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-semibold text-sm sm:text-base">
             New Summer Collection 2026
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Discover Your
            <span className="text-blue-600"> Dream </span>
            Fashion
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-600 leading-7 sm:leading-8 max-w-xl mx-auto lg:mx-0">
            Premium clothing, amazing offers, secure payment,
            and lightning-fast delivery.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-10">

            <button className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg">
              Shop Now
              <ArrowRight size={20} />
            </button>

            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 px-8 py-4 rounded-xl flex items-center justify-center gap-2">
              Explore
              <ShoppingBag size={20} />
            </button>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 text-center">

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                10K+
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Happy Customers
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                500+
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Premium Products
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                24/7
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Support
              </p>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900"
            alt="Fashion"
            className="rounded-[30px] lg:rounded-[40px] shadow-2xl w-full max-w-xs sm:max-w-md lg:max-w-lg hover:scale-105 transition duration-500"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;