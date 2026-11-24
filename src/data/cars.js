
import harrierImage from "../assets/images/Harrier.jpg";
import benzImage from "../assets/images/Benz.jpg";
import cx5Image from "../assets/images/CX-5.jpg";
import bmwImage from "../assets/images/BMW M5.jpg";
import subaruImage from "../assets/images/Subaru.jpg";
import hondaImage from "../assets/images/Honda Crv.jpg";
import pradoImage from "../assets/images/Prado.jpg";
import xtrailImage from "../assets/images/Xtrail.jpg";

const cars = [
  {
    id: 1,
    make: "Toyota",
    model: "Harrier",
    year: 2022,
    price: 3850000,
    mileage: 18000,
    transmission: "Automatic",
    fuel: "Petrol",
    status: "Available",
    image: harrierImage,
  },
  {
    id: 2,
    make: "Mercedes-Benz",
    model: "C200",
    year: 2021,
    price: 5200000,
    mileage: 25000,
    transmission: "Automatic",
    fuel: "Petrol",
    status: "Available",
    image: benzImage,
  },
  {
    id: 3,
    make: "Mazda",
    model: "CX-5",
    year: 2020,
    price: 2950000,
    mileage: 32000,
    transmission: "Automatic",
    fuel: "Diesel",
    status: "Available",
    image: cx5Image,
  },
  {
    id: 4,
    make: "BMW",
    model: "M5",
    year: 2023,
    price: 6100000,
    mileage: 12000,
    transmission: "Automatic",
    fuel: "Petrol",
    status: "Available",
    image: bmwImage,
  },
  {
    id: 5,
    make: "Subaru",
    model: "Forester",
    year: 2019,
    price: 2650000,
    mileage: 45000,
    transmission: "Automatic",
    fuel: "Petrol",
    status: "Reserved",
    image: subaruImage,
  },
  {
    id: 6,
    make: "Honda",
    model: "CR-V",
    year: 2022,
    price: 4200000,
    mileage: 20000,
    transmission: "Automatic",
    fuel: "Petrol",
    status: "Available",
    image: hondaImage,
  },
  {
    id: 7,
    make: "Toyota",
    model: "Land Cruiser Prado",
    year: 2021,
    price: 7800000,
    mileage: 28000,
    transmission: "Automatic",
    fuel: "Diesel",
    status: "Available",
    image: pradoImage,
  },
  {
    id: 8,
    make: "Nissan",
    model: "X-Trail",
    year: 2018,
    price: 2150000,
    mileage: 52000,
    transmission: "Automatic",
    fuel: "Petrol",
    status: "Sold",
    image: xtrailImage,
  },
];

export default cars;
