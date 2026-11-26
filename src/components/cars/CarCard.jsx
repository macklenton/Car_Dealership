import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Heart } from "lucide-react";
import { useState } from "react";
function CarCard({ car }) {
  const navigate = useNavigate();
  const location = useLocation();

  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const [isSaved, setIsSaved] = useState(() => {
    if (!user?.id) return false;

    const wishlistKey = `autodrive_wishlist_${user.id}`;

    const savedWishlist = JSON.parse(localStorage.getItem(wishlistKey) || "[]");

    return savedWishlist.includes(car.id);
  });

  function handleWishlist() {
    if (!isAuthenticated || !user?.id) {
      navigate("/login", {
        state: { from: location },
      });
      return;
    }

    const wishlistKey = `autodrive_wishlist_${user.id}`;

    const savedWishlist = JSON.parse(localStorage.getItem(wishlistKey) || "[]");

    let updatedWishlist;

    if (savedWishlist.includes(car.id)) {
      updatedWishlist = savedWishlist.filter((id) => id !== car.id);
    } else {
      updatedWishlist = [...savedWishlist, car.id];
    }

    localStorage.setItem(wishlistKey, JSON.stringify(updatedWishlist));

    setIsSaved(updatedWishlist.includes(car.id));
  }
  const formattedPrice = new Intl.NumberFormat("en-KE").format(car.price);

  return (
    <div className="group overflow-hidden bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Car Image */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Status */}
        <span
          className={`absolute left-3 top-3 rounded-sm px-3 py-1 text-xs font-bold uppercase tracking-wide ${
            car.status === "Available"
              ? "bg-orange-500 text-white"
              : car.status === "Reserved"
                ? "bg-yellow-400 text-gray-900"
                : "bg-red-600 text-white"
          }`}
        >
          <button
            type="button"
            onClick={handleWishlist}
            aria-label={isSaved ? "Remove from wishlist" : "Add to wishlist"}
            title={isSaved ? "Remove from wishlist" : "Add to wishlist"}
            className="absolute right-9 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-110"
          >
            <Heart
              size={20}
              className={
                isSaved ? "fill-red-500 text-red-500" : "text-[#14213d]"
              }
            />
          </button>
          {car.status}
        </span>
      </div>

      {/* Car Information */}
      <div className="p-5">
        {/* Make, Model and Year */}
        <div className="mb-4 border-b border-gray-200 pb-3">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-orange-500">
            {car.year} Model
          </p>

          <h3 className="text-xl font-bold uppercase text-[#14213d]">
            {car.make} {car.model}
          </h3>
        </div>

        {/* Price */}
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Our Price
          </p>

          <p className="mt-1 text-2xl font-extrabold text-orange-500">
            KSh {formattedPrice}
          </p>
        </div>

        {/* Specifications */}
        <div className="mb-5 grid grid-cols-3 border-y border-gray-200 py-4 text-center">
          <div className="px-1">
            <p className="text-sm font-bold text-[#14213d]">
              {Number(car.mileage || 0).toLocaleString()}
            </p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-gray-500">
              Mileage
            </p>
          </div>

          <div className="border-x border-gray-200 px-1">
            <p className="text-sm font-bold text-[#14213d]">
              {car.transmission}
            </p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-gray-500">
              Gearbox
            </p>
          </div>

          <div className="px-1">
            <p className="text-sm font-bold text-[#14213d]">{car.fuel}</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-gray-500">
              Fuel
            </p>
          </div>
        </div>

        {/* Details Button */}
        <Link
          to={`/cars/${car.id}`}
          className="block w-full bg-[#14213d] px-4 py-3 text-center text-sm font-bold uppercase tracking-widest text-white transition duration-300 hover:bg-orange-500"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default CarCard;
