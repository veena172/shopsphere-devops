function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border rounded-xl px-5 py-4 outline-none focus:border-blue-600"
      />
    </div>
  );
}

export default SearchBar;