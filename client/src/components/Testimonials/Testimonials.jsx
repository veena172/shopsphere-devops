const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Verified Customer",
    review:
      "Amazing quality and super fast delivery. I loved shopping from ShopSphere.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Fashion Enthusiast",
    review:
      "The products are exactly as shown. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Aman Gupta",
    role: "Regular Buyer",
    review:
      "Best shopping experience. Easy returns and excellent support.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

function Testimonials() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">

          <h2 className="text-3xl md:text-4xl font-bold">
            What Our Customers Say
          </h2>

          <p className="text-gray-500 mt-3 text-sm md:text-lg max-w-2xl mx-auto">
            Trusted by thousands of happy customers.
          </p>

        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {reviews.map((item) => (

            <div
              key={item.id}
              className="bg-slate-100 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-white shadow"
              />

              <h3 className="text-xl md:text-2xl font-semibold mt-5 text-center">
                {item.name}
              </h3>

              <p className="text-blue-600 text-center text-sm md:text-base">
                {item.role}
              </p>

              <p className="text-gray-600 mt-5 text-center text-sm md:text-base leading-7">
                "{item.review}"
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;