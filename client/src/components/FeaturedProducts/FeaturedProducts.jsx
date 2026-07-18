import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import API from "../../api/api";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await API.get("/products");

      // Sirf first 4 products show karenge
      setProducts(data.products.slice(0, 4));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="py-14 md:py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured Products
          </h2>

          <p className="text-gray-500 mt-3 text-sm md:text-lg max-w-2xl mx-auto">
            Discover our most popular fashion collection.
          </p>

        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">

          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;