
import { Link } from "react-router-dom";


function CarCard({ car }) {
  const formattedPrice = new Intl.NumberFormat("en-KE").format(car.price);

  return (
    <div >

      <div >
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          
        />

        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${
            car.status === "Available"
              ? "bg-green-100 text-green-700"
              : car.status === "Reserved"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {car.status}
        </span>
      </div>

      <div >
        <div>
          <p >{car.year}</p>
          <h3 >
            {car.make} {car.model}
          </h3>
        </div>

        <p >
          KSh {formattedPrice}
        </p>

        <div >
          <p>{car.mileage.toLocaleString()} km</p>
          <p>{car.transmission}</p>
          <p>{car.fuel}</p>
          <p>{car.year}</p>
        </div>

        <Link
          to={`/cars/${car.id}`}
          >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default CarCard;
