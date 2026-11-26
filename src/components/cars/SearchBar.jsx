function SearchBar({ search, setSearch}) {
  return (
    <div>
      <h1>Search Car</h1>
       <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search by car make or model..."
        className="w-full py-3 pl-11 pr-24 text-sm text-gray-900 bg-white border border-gray-300 rounded-full shadow-sm transition-colors focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
        
      />
      
    </div>
  );
}

export default SearchBar;
