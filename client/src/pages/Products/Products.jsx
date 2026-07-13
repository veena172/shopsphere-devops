import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import SortDropdown from "../../components/SortDropdown/SortDropdown";
import ProductFilter from "../../components/ProductFilter/ProductFilter";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import products from "../../data/products";

function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (sortOption === "lowToHigh") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    );
  }

  if (sortOption === "highToLow") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.price - a.price
    );
  }

  return (
    <>
      <Navbar />

      <section className="bg-slate-100 min-h-screen py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-8">
            Our Products
          </h1>

          {/* Search */}
          <div className="mb-5">
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </div>

          {/* Sort */}
          <div className="mb-5">
            <SortDropdown
              sortOption={sortOption}
              setSortOption={setSortOption}
            />
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <ProductFilter
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>

          {/* Products */}
          <ProductGrid
            products={filteredProducts}
          />

        </div>
      </section>
    </>
  );
}

export default Products;