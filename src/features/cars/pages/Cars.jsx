import { useMemo, useState } from "react";
import cars from "../../../data/cars";
import CarCard from "../../../components/cars/CarCard";
import CarFilters from "../../../components/cars/CarFilters";
import SearchBar from "../../../components/cars/SearchBar";
import Navbar from "../../../components/layout/Navbar";

function Cars() {
  const [search, setSearch] = useState("");

  const initialFilters = {
    make: "All",
    price: "All",
    year: "All",
    transmission: "All",
    fuel: "All",
    status: "All",
  };

  const [filters, setFilters] = useState(initialFilters);
  const [sort, setSort] = useState("newest");

  function handleFilterChange(name, value) {
    setFilters((previousFilters) => ({
      ...previousFilters,
      [name]: value,
    }));
  }

  function resetFilters() {
    setFilters(initialFilters);
    setSearch("");
    setSort("newest");
  }

  const filteredCars = useMemo(() => {
    let results = cars.filter((car) => {
      const searchMatch = `${car.make} ${car.model}`
        .toLowerCase()
        .includes(search.toLowerCase());

      const makeMatch = filters.make === "All" || car.make === filters.make;

      const yearMatch =
        filters.year === "All" || car.year >= Number(filters.year);

      const transmissionMatch =
        filters.transmission === "All" ||
        car.transmission === filters.transmission;

      const fuelMatch = filters.fuel === "All" || car.fuel === filters.fuel;

      const statusMatch =
        filters.status === "All" || car.status === filters.status;

      let priceMatch = true;

      if (filters.price === "under1m") {
        priceMatch = car.price < 1000000;
      } else if (filters.price === "1to2m") {
        priceMatch = car.price >= 1000000 && car.price <= 2000000;
      } else if (filters.price === "2to4m") {
        priceMatch = car.price > 2000000 && car.price <= 4000000;
      } else if (filters.price === "above4m") {
        priceMatch = car.price > 4000000;
      }

      return (
        searchMatch &&
        makeMatch &&
        yearMatch &&
        transmissionMatch &&
        fuelMatch &&
        statusMatch &&
        priceMatch
      );
    });

    if (sort === "newest") {
      results.sort((a, b) => b.year - a.year);
    } else if (sort === "priceLow") {
      results.sort((a, b) => a.price - b.price);
    } else if (sort === "priceHigh") {
      results.sort((a, b) => b.price - a.price);
    }

    return results;
  }, [search, filters, sort]);

  return (
    <main className="min-h-screen bg-[#f5f5f5] px-5 py-12 md:px-10">
      <section className="mx-auto max-w-7xl">
        <Navbar />

        {/* Page Heading */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
            Find Your Perfect Vehicle
          </p>

          <h1 className="text-3xl font-extrabold uppercase text-[#14213d] md:text-4xl">
            Explore Our Cars
          </h1>

          <div className="mx-auto mt-4 h-1 w-16 bg-orange-500"></div>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600">
            Browse our collection of quality vehicles and find one that matches
            your needs, preferences and budget.
          </p>
        </div>
        {/* Search */}
        <div className="mb-7 bg-white p-4 shadow-sm md:p-5">
          <SearchBar search={search} setSearch={setSearch} />
        </div>

        {/* Filters */}
        <div className="mb-10 border-t-4 border-orange-500 bg-white p-5 shadow-sm md:p-6">
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
                Narrow Your Search
              </p>

              <h2 className="mt-1 text-xl font-bold uppercase text-[#14213d]">
                Filter Vehicles
              </h2>
            </div>

            <button
              onClick={resetFilters}
              className="text-sm font-bold uppercase tracking-wide text-orange-500 transition hover:text-[#14213d]"
            >
              Clear All Filters
            </button>
          </div>

          <CarFilters
            filters={filters}
            onFilterChange={handleFilterChange}
            onReset={resetFilters}
          />
        </div>

        {/* Results Heading and Sorting */}
        <div className="mb-7 flex flex-col justify-between gap-4 border-b border-gray-300 pb-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
              Our Collection
            </p>

            <h2 className="mt-1 text-2xl font-extrabold uppercase text-[#14213d]">
              Available Vehicles
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Showing {filteredCars.length} vehicles
            </p>
          </div>

          <div className="flex items-center gap-3">
            <label
              htmlFor="sort"
              className="text-sm font-semibold text-[#14213d]"
            >
              Sort By:
            </label>

            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-gray-300 bg-white px-4 py-3 text-sm text-[#14213d] outline-none focus:border-orange-500"
            >
              <option value="newest">Newest First</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Vehicle Cards */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="border-t-4 border-orange-500 bg-white px-5 py-16 text-center shadow-sm">
            <h3 className="text-2xl font-bold uppercase text-[#14213d]">
              No Vehicles Found
            </h3>

            <p className="mt-3 text-gray-500">
              We couldn't find vehicles matching your search. Try changing your
              search or filters.
            </p>

            <button
              onClick={resetFilters}
              className="mt-6 bg-[#14213d] px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-orange-500"
            >
              Reset Search
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default Cars;
