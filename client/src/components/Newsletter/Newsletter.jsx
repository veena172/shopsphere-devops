import { Mail } from "lucide-react";

function Newsletter() {
  return (
    <section className="py-14 md:py-20 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">

        <Mail
          size={50}
          className="mx-auto mb-5"
        />

        <h2 className="text-3xl md:text-4xl font-bold">
          Subscribe To Our Newsletter
        </h2>

        <p className="mt-4 text-blue-100 text-sm md:text-lg max-w-2xl mx-auto">
          Get updates about new arrivals, exclusive offers and discounts.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-4 rounded-xl text-black w-full sm:w-80 md:w-96 outline-none"
          />

          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition w-full sm:w-auto">
            Subscribe
          </button>

        </div>

      </div>
    </section>
  );
}

export default Newsletter;