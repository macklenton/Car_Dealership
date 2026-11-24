function SearchBar({ search, setSearch}) {
  return (
    <div>
      <h1>SearchBar</h1>
       <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search by car make or model..."
        
      />
      
    </div>
  );
}

export default SearchBar;
