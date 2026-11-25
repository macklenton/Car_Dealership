import cars from "../../../data/cars"
import { Link, useNavigate, useParams} from "react-router-dom"

function CarDetails(){
  const { id } = useParams();
  const navigate = useNavigate();

  const car = cars.find((item) => item.id === Number(id));

  if (!car) {
    return (
      <div>
        <h2>Vehicle Not Found</h2>
        <Link to="/cars">Back to Cars</Link>
      </div>
    );
  }
  const formattedPrice = new Intl.NumberFormat("en-KE").format(car.price);

  const handleBuyNow = () => {
    navigate("/order", {
      state: { car },
    });
  };


  return(
    <>
       <div>
      <div>

        
        <Link to="/cars">Back to Cars</Link>

        <div>

          {/* Car image */}
          <div>
            <img
              src={car.image}
              alt={`${car.make} ${car.model}`}
            />
            <span>{car.status}</span>
          </div>

        
          <div>

            <p>{car.year} Model</p>

            <h1>{car.make} {car.model}</h1>

            <div>
              <p>Selling Price</p>
              <p>KSh {formattedPrice}</p>
            </div>

          
            <h2>Vehicle Specifications</h2>

            <div>

              <div>
                <p>Mileage</p>
                <p>{Number(car.mileage).toLocaleString()} km</p>
              </div>

              <div>
                <p>Transmission</p>
                <p>{car.transmission}</p>
              </div>

              <div>
                <p>Fuel Type</p>
                <p>{car.fuel}</p>
              </div>

              <div>
                <p>Year</p>
                <p>{car.year}</p>
              </div>

            </div>

            
            <button
              onClick={handleBuyNow}
              disabled={car.status !== "Available"}
            >
              {car.status === "Available" ? "Buy Now" : `Vehicle ${car.status}`}
            </button>

            <p>
              Contact our team for more information about this vehicle.
            </p>

          </div>
        </div>
      </div>
    </div>
    </>

  )
}
export default CarDetails;