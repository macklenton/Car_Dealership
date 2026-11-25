
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  LayoutDashboard,
  CarFront,
  Heart,
  ShoppingBag,
  LogOut,
  Trash2,
  ArrowRight,
} from "lucide-react";

import cars from "../../../data/cars";
import { logoutUser } from "../../auth/authSlice";

function CustomerDashboard() {
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [orders, setOrders] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Explore Cars", icon: CarFront },
    { name: "My Wishlist", icon: Heart },
    { name: "My Orders", icon: ShoppingBag },
  ];

  // Format prices in Kenyan Shillings
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
      maximumFractionDigits: 0,
    }).format(Number(price || 0));
  };

  // Load the logged-in customer's wishlist and orders
  useEffect(() => {
    if (!user?.id) {
      setWishlist([]);
      setOrders([]);
      return;
    }

    // Load customer wishlist
    const wishlistKey = `autodrive_wishlist_${user.id}`;

    const savedWishlist = JSON.parse(
      localStorage.getItem(wishlistKey) || "[]"
    );

    const savedCars = cars.filter((car) =>
      savedWishlist.some(
        (id) => String(id) === String(car.id)
      )
    );

    setWishlist(savedCars);

    // Load customer orders
    const savedOrders = JSON.parse(
      localStorage.getItem("autodrive_orders") || "[]"
    );

    const customerOrders = savedOrders.filter((order) => {
      const matchesId =
        order.customerId != null &&
        String(order.customerId) === String(user.id);

      const orderEmail = (
        order.customerEmail || order.email || ""
      ).trim().toLowerCase();

      const userEmail = (user.email || "").trim().toLowerCase();

      const matchesEmail =
        orderEmail !== "" &&
        userEmail !== "" &&
        orderEmail === userEmail;

      return matchesId || matchesEmail;
    });

    setOrders(customerOrders);
  }, [user]);

  // Remove a car from wishlist
  const handleRemoveWishlist = (carId) => {
    if (!user?.id) return;

    const wishlistKey = `autodrive_wishlist_${user.id}`;

    const savedWishlist = JSON.parse(
      localStorage.getItem(wishlistKey) || "[]"
    );

    const updatedWishlist = savedWishlist.filter(
      (id) => String(id) !== String(carId)
    );

    localStorage.setItem(
      wishlistKey,
      JSON.stringify(updatedWishlist)
    );

    setWishlist((previousWishlist) =>
      previousWishlist.filter(
        (car) => String(car.id) !== String(carId)
      )
    );
  };

  // Navigate between dashboard sections
  const handleNavigation = (item) => {
    if (item === "Explore Cars") {
      navigate("/cars");
      return;
    }

    setActiveSection(item);
  };

  // Logout customer
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login", { replace: true });
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="flex w-64 shrink-0 flex-col bg-[#14213d] text-white">

        <div className="border-b border-gray-700 p-6">
          <h1 className="text-2xl font-extrabold tracking-wide">
            <span className="text-amber-500">AutoDrive</span>
          </h1>

          <p className="mt-2 text-xs text-gray-400">
            Customer Dashboard
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                type="button"
                onClick={() => handleNavigation(item.name)}
                className={`flex w-full items-center gap-3 px-4 py-3 text-left font-semibold transition ${
                  activeSection === item.name
                    ? "bg-amber-500 text-white"
                    : "text-gray-300 hover:bg-amber-500 hover:text-white"
                }`}
              >
                <Icon size={20} />
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="border-t border-gray-700 p-4">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 px-4 py-3 text-left font-semibold text-red-400 transition hover:bg-red-500 hover:text-white"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>

      </aside>

      {/* Main Content */}
      <main className="min-w-0 flex-1 p-6 md:p-10">

        {/* Header */}
        <header className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            Customer Portal
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-[#14213d]">
            {activeSection}
          </h2>
        </header>

        {/* Dashboard Overview */}
        {activeSection === "Dashboard" && (
          <div>

            <h3 className="text-xl font-bold text-[#14213d]">
              Welcome Back, {user?.name || "Customer"}!
            </h3>

            <p className="mt-2 text-gray-500">
              Manage your vehicles, wishlist and orders from one place.
            </p>

            {/* Statistics */}
            <div className="mt-8 grid gap-6 md:grid-cols-3">

              <div className="bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    Available Cars
                  </p>
                  <CarFront className="text-orange-500" size={24} />
                </div>

                <h3 className="mt-3 text-3xl font-bold text-[#14213d]">
                  {cars.filter((car) => car.status === "Available").length}
                </h3>
              </div>

              <div className="bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    Wishlist Items
                  </p>
                  <Heart className="text-orange-500" size={24} />
                </div>

                <h3 className="mt-3 text-3xl font-bold text-[#14213d]">
                  {wishlist.length}
                </h3>
              </div>

              <div className="bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    My Orders
                  </p>
                  <ShoppingBag className="text-orange-500" size={24} />
                </div>

                <h3 className="mt-3 text-3xl font-bold text-[#14213d]">
                  {orders.length}
                </h3>
              </div>

            </div>

            {/* Explore Cars */}
            <div className="mt-8 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#14213d]">
                Looking for your next car?
              </h3>

              <p className="mt-2 text-gray-500">
                Explore our available vehicles and find one that suits you.
              </p>

              <Link
                to="/cars"
                className="mt-5 inline-flex items-center gap-2 bg-amber-500 px-6 py-3 font-bold text-white transition hover:bg-[#14213d]"
              >
                Explore Cars
                <ArrowRight size={18} />
              </Link>
            </div>

          </div>
        )}

        {/* My Wishlist */}
        {activeSection === "My Wishlist" && (
          <div className="bg-white p-6 shadow-sm md:p-8">

            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-[#14213d]">
                  My Wishlist
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Your saved vehicles ({wishlist.length})
                </p>
              </div>

              <Link
                to="/cars"
                className="bg-[#14213d] px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-500"
              >
                Explore More Cars
              </Link>
            </div>

            {wishlist.length === 0 ? (
              <div className="py-12 text-center">
                <Heart
                  size={45}
                  className="mx-auto mb-4 text-gray-300"
                />

                <h4 className="text-lg font-bold text-[#14213d]">
                  Your Wishlist is Empty
                </h4>

                <p className="mt-2 text-gray-500">
                  You haven't saved any vehicles yet.
                </p>

                <Link
                  to="/cars"
                  className="mt-5 inline-block bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-[#14213d]"
                >
                  Explore Cars
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

                {wishlist.map((car) => (
                  <div
                    key={car.id}
                    className="overflow-hidden border border-gray-200 bg-white shadow-sm"
                  >

                    <img
                      src={car.image}
                      alt={`${car.make} ${car.model}`}
                      className="h-48 w-full object-cover"
                    />

                    <div className="p-5">

                      <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
                        {car.year} Model
                      </p>

                      <h4 className="mt-2 text-lg font-bold uppercase text-[#14213d]">
                        {car.make} {car.model}
                      </h4>

                      <p className="mt-3 text-xl font-extrabold text-orange-500">
                        {formatPrice(car.price)}
                      </p>

                      <p className="mt-2 text-sm text-gray-500">
                        {car.transmission} · {car.fuel}
                      </p>

                      <div className="mt-5 flex flex-col gap-3">

                        <Link
                          to={`/cars/${car.id}`}
                          className="bg-[#14213d] px-4 py-3 text-center text-sm font-bold uppercase text-white transition hover:bg-orange-500"
                        >
                          View Details
                        </Link>

                        <button
                          type="button"
                          onClick={() => handleRemoveWishlist(car.id)}
                          className="flex items-center justify-center gap-2 border border-red-500 px-4 py-3 text-sm font-bold uppercase text-red-500 transition hover:bg-red-500 hover:text-white"
                        >
                          <Trash2 size={17} />
                          Remove from Wishlist
                        </button>

                      </div>
                    </div>
                  </div>
                ))}

              </div>
            )}

          </div>
        )}

        {/* My Orders */}
        {activeSection === "My Orders" && (
          <div className="bg-white p-6 shadow-sm md:p-8">

            <h3 className="text-xl font-bold text-[#14213d]">
              My Orders ({orders.length})
            </h3>

            {orders.length === 0 ? (
              <div className="py-12 text-center">
                <ShoppingBag
                  size={45}
                  className="mx-auto mb-4 text-gray-300"
                />

                <h4 className="text-lg font-bold text-[#14213d]">
                  No Orders Yet
                </h4>

                <p className="mt-2 text-gray-500">
                  You haven't placed any orders yet.
                </p>

                <Link
                  to="/cars"
                  className="mt-5 inline-block bg-orange-500 px-6 py-3 font-bold text-white"
                >
                  Browse Vehicles
                </Link>
              </div>
            ) : (
              <div className="mt-6 space-y-5">

                {orders.map((order, index) => (
                  <div
                    key={order.orderNumber || order.id || index}
                    className="flex flex-col gap-5 border border-gray-200 p-5 md:flex-row"
                  >

                    {/* Car Image */}
                    {order.car?.image && (
                      <img
                        src={order.car.image}
                        alt={`${order.car.make || ""} ${order.car.model || order.car.name || ""}`}
                        className="h-40 w-full rounded-lg object-cover md:w-52"
                      />
                    )}

                    {/* Order Information */}
                    <div className="min-w-0 flex-1">

                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h4 className="text-lg font-bold text-[#14213d]">
                          {order.car?.make} {order.car?.model || order.car?.name || "Vehicle"}
                        </h4>

                        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                          {order.status || "Received"}
                        </span>
                      </div>

                      <p className="mt-1 text-sm text-gray-500">
                        {order.car?.year} Model
                      </p>

                      <p className="mt-3 text-lg font-bold text-amber-600">
                        {formatPrice(order.car?.price)}
                      </p>

                      <div className="mt-4 space-y-2 text-sm text-gray-600">
                        <p>
                          <span className="font-semibold">Order ID:</span>{" "}
                          {order.orderNumber || order.id || "Not available"}
                        </p>

                        <p>
                          <span className="font-semibold">Payment:</span>{" "}
                          {order.paymentStatus || "Awaiting Confirmation"}
                        </p>

                        <p>
                          <span className="font-semibold">Date:</span>{" "}
                          {order.date
                            ? new Date(order.date).toLocaleDateString("en-KE")
                            : "Not available"}
                        </p>
                      </div>

                    </div>
                  </div>
                ))}

              </div>
            )}

          </div>
        )}

      </main>
    </div>
  );
}

export default CustomerDashboard;
