import { Link, useNavigate, useParams } from "react-router-dom";
import cars from "../../../data/cars";

function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  
  const car = cars.find((item) => item.id === Number(id));

  
  if (!car) {
    return (
      <div className="min-h-screen bg-gray-100 p-10 text-center">
        <h2 className="text-2xl font-bold text-[#14213d]">
          Vehicle Not Found
        </h2>

        <Link
          to="/cars"
          className="mt-5 inline-block bg-orange-500 px-6 py-3 text-white"
        >
          Back to Cars
        </Link>
      </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat("en-KE").format(car.price);

  const handleBuyNow = () => {
    navigate("/checkout", {
      state: { car },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 md:px-10">
      <div className="mx-auto max-w-6xl">

        {/* Back navigation */}
        <Link
          to="/cars"
          className="mb-6 inline-block font-semibold text-[#14213d] hover:text-orange-500"
        >
          Back to Cars
        </Link>

        <div className="grid overflow-hidden bg-white shadow-lg md:grid-cols-2">

          {/* Car image */}
          <div className="relative min-h-[300px] bg-gray-200 md:min-h-[500px]">
            <img
              src={car.image}
              alt={`${car.make} ${car.model}`}
              className="absolute h-full w-full object-cover"
            />

            <span
              className={`absolute left-5 top-5 px-4 py-2 text-sm font-bold uppercase text-white ${
                car.status === "Available"
                  ? "bg-green-600"
                  : car.status === "Reserved"
                  ? "bg-yellow-500"
                  : "bg-red-600"
              }`}
            >
              {car.status}
            </span>
          </div>

          
          <div className="p-6 md:p-10">

            <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
              {car.year} Model
            </p>

            <h1 className="mt-2 text-3xl font-extrabold uppercase text-[#14213d] md:text-4xl">
              {car.make} {car.model}
            </h1>

            <div className="mt-6 border-b border-gray-200 pb-6">
              <p className="text-sm font-semibold uppercase text-gray-500">
                Selling Price
              </p>

              <p className="mt-2 text-3xl font-extrabold text-orange-500">
                KSh {formattedPrice}
              </p>
            </div>

            
            <h2 className="mb-4 mt-7 text-lg font-bold uppercase text-[#14213d]">
              Vehicle Specifications
            </h2>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-gray-100 p-4">
                <p className="text-xs font-semibold uppercase text-gray-500">
                  Mileage
                </p>
                <p className="mt-2 font-bold text-[#14213d]">
                  {Number(car.mileage).toLocaleString()} km
                </p>
              </div>

              <div className="bg-gray-100 p-4">
                <p className="text-xs font-semibold uppercase text-gray-500">
                  Transmission
                </p>
                <p className="mt-2 font-bold text-[#14213d]">
                  {car.transmission}
                </p>
              </div>

              <div className="bg-gray-100 p-4">
                <p className="text-xs font-semibold uppercase text-gray-500">
                  Fuel Type
                </p>
                <p className="mt-2 font-bold text-[#14213d]">
                  {car.fuel}
                </p>
              </div>

              <div className="bg-gray-100 p-4">
                <p className="text-xs font-semibold uppercase text-gray-500">
                  Year
                </p>
                <p className="mt-2 font-bold text-[#14213d]">
                  {car.year}
                </p>
              </div>

            </div>

            
            <button
              onClick={handleBuyNow}
              disabled={car.status !== "Available"}
              className="mt-8 w-full bg-orange-500 px-6 py-4 font-bold uppercase tracking-widest text-white transition hover:bg-[#14213d] disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              {car.status === "Available" ? "Buy Now" : `Vehicle ${car.status}`}
            </button>

            <p className="mt-4 text-center text-sm text-gray-500">
              Contact our team for more information about this vehicle.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;