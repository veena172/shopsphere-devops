function SortDropdown({ sortOption, setSortOption }) {
  return (
    <div className="flex justify-end mb-6">
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="border px-5 py-3 rounded-xl outline-none focus:border-blue-600"
      >
        <option value="default">Sort By</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>
    </div>
  );
}

export default SortDropdown;