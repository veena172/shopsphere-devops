import ProductCard from "../ProductCard/ProductCard";

function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-semibold text-gray-600">
          No Products Found 😔
        </h2>

        <p className="text-gray-500 mt-3">
          Try searching with another product name.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductGrid;