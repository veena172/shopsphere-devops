const categories = [
  {
    id: 1,
    name: "Men",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500",
  },
  {
    id: 2,
    name: "Women",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500",
  },
  {
    id: 3,
    name: "Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    id: 4,
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500",
  },
];

function Categories() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Shop By Category
        </h2>

        <p className="text-center text-gray-500 text-sm md:text-base mb-10 md:mb-12">
          Discover premium collections for everyone.
        </p>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

          {categories.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >

              <img
                src={item.image}
                alt={item.name}
                className="h-60 sm:h-64 md:h-72 w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="p-5 bg-white text-center">

                <h3 className="text-lg md:text-xl font-semibold group-hover:text-blue-600 transition-colors">
                  {item.name}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Categories;