
import { useMemo, useState } from "react";
import cars from "../../../data/cars";
import CarCard from "../../../components/cars/CarCard";
import CarFilters from "../../../components/cars/CarFilters";
import SearchBar from "../../../components/cars/SearchBar";

function Cars() {
  const [search, setSearch] = useState("");

  const initialFilters = {
    make: "All",
    price: "All",
    year: "All",
    transmission: "All",
    fuel: "All",
    status: "Available",
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
      const searchMatch =
        `${car.make} ${car.model}`
          .toLowerCase()
          .includes(search.toLowerCase());

      const makeMatch =
        filters.make === "All" || car.make === filters.make;

      const yearMatch =
        filters.year === "All" || car.year >= Number(filters.year);

      const transmissionMatch =
        filters.transmission === "All" ||
        car.transmission === filters.transmission;

      const fuelMatch =
        filters.fuel === "All" || car.fuel === filters.fuel;

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
    <main className="min-h-screen bg-gray-50 px-5 py-10 md:px-10">

      <section className="mx-auto max-w-7xl">

        {/* Page heading */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-700">
            Find your next vehicle
          </p>

          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Explore Our Cars
          </h1>

          <p className="mt-3 max-w-2xl text-gray-600">
            Browse our collection of vehicles and find one that matches
            your needs and budget.
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <SearchBar search={search} setSearch={setSearch} />
        </div>

        {/* Filters */}
        <div className="mb-8 rounded-xl border border-gray-200 bg-white p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-bold text-gray-900">Filter Vehicles</h2>
            <button
              onClick={resetFilters}
              className="text-sm font-semibold text-blue-700 hover:underline"
            >
              Clear all
            </button>
          </div>

          <CarFilters
            filters={filters}
            onFilterChange={handleFilterChange}
            onReset={resetFilters}
          />
        </div>

        {/* Results heading and sorting */}
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Available Vehicles
            </h2>
            <p className="text-sm text-gray-500">
              {filteredCars.length} vehicles found
            </p>
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 outline-none"
          >
            <option value="newest">Newest First</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
          </select>
        </div>

        {/* Vehicle cards */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-gray-200 bg-white py-16 text-center">
            <h3 className="text-xl font-bold text-gray-900">
              No vehicles found
            </h3>
            <p className="mt-2 text-gray-500">
              Try changing your search or filters.
            </p>
            <button
              onClick={resetFilters}
              className="mt-5 rounded-lg bg-gray-900 px-5 py-2.5 font-semibold text-white hover:bg-blue-700"
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
