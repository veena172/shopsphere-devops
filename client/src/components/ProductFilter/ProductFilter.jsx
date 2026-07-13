const categories = ["All", "Men", "Women", "Shoes", "Accessories"];

function ProductFilter({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-6 py-2 rounded-full transition font-medium ${
            selectedCategory === category
              ? "bg-blue-600 text-white"
              : "border border-gray-300 hover:bg-blue-600 hover:text-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default ProductFilter;