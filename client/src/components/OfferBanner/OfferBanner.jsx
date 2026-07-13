import { ArrowRight } from "lucide-react";

function OfferBanner() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row justify-between items-center text-white shadow-2xl gap-8">

          {/* Left Content */}
          <div className="text-center lg:text-left">

            <span className="inline-block bg-white text-blue-600 px-4 py-2 rounded-full font-semibold text-sm md:text-base">
               Limited Time Offer
            </span>

            <h2 className="text-3xl md:text-5xl font-bold mt-6">
              Summer Sale
            </h2>

            <p className="text-xl md:text-3xl mt-3 font-semibold">
              Get Up to{" "}
              <span className="text-yellow-300">
                50% OFF
              </span>
            </p>

            <p className="mt-4 text-blue-100 text-sm md:text-lg max-w-lg mx-auto lg:mx-0 leading-7">
              Upgrade your wardrobe with premium fashion at amazing prices.
              Hurry! Offer ends soon.
            </p>

          </div>

          {/* Button */}
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition w-full sm:w-auto">
            Shop Now
            <ArrowRight size={20} />
          </button>

        </div>

      </div>
    </section>
  );
}

export default OfferBanner;