
function CarFilters({ filters, onFilterChange, onReset }) {
  const selectClass =
    "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 outline-none focus:border-blue-600";

  return (
    <div >

      <select
        className={selectClass}
        value={filters.make}
        onChange={(e) => onFilterChange("make", e.target.value)}
      >
        <option value="All">All Brands</option>
        <option value="Toyota">Toyota</option>
        <option value="Mercedes-Benz">Mercedes-Benz</option>
        <option value="BMW">BMW</option>
        <option value="Mazda">Mazda</option>
        <option value="Subaru">Subaru</option>
        <option value="Honda">Honda</option>
        <option value="Nissan">Nissan</option>
      </select>

      <select
        className={selectClass}
        value={filters.price}
        onChange={(e) => onFilterChange("price", e.target.value)}
      >
        <option value="All">Any Price</option>
        <option value="under1m">Below KSh 1M</option>
        <option value="1to2m">KSh 1M - 2M</option>
        <option value="2to4m">KSh 2M - 4M</option>
        <option value="above4m">Above KSh 4M</option>
      </select>

      <select
        className={selectClass}
        value={filters.year}
        onChange={(e) => onFilterChange("year", e.target.value)}
      >
        <option value="All">Any Year</option>
        <option value="2022">2022 and newer</option>
        <option value="2020">2020 and newer</option>
        <option value="2018">2018 and newer</option>
      </select>

      <select
        className={selectClass}
        value={filters.transmission}
        onChange={(e) => onFilterChange("transmission", e.target.value)}
      >
        <option value="All">All Transmissions</option>
        <option value="Automatic">Automatic</option>
        <option value="Manual">Manual</option>
      </select>

      <select
        className={selectClass}
        value={filters.fuel}
        onChange={(e) => onFilterChange("fuel", e.target.value)}
      >
        <option value="All">All Fuel Types</option>
        <option value="Petrol">Petrol</option>
        <option value="Diesel">Diesel</option>
        <option value="Hybrid">Hybrid</option>
        <option value="Electric">Electric</option>
      </select>

      <select
        className={selectClass}
        value={filters.status}
        onChange={(e) => onFilterChange("status", e.target.value)}
      >
        <option value="All">All Availability</option>
        <option value="Available">Available</option>
        <option value="Reserved">Reserved</option>
        <option value="Sold">Sold</option>
      </select>

      
    </div>
  );
}

export default CarFilters;
