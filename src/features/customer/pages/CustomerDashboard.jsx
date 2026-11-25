import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cars from "../../../data/cars";

function CustomerDashboard() {
  const [activeSection, setActiveSection] = useState("Dashboard");
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard" },
    { name: "Explore Cars" },
    { name: "My Wishlist" },
    { name: "My Orders"},
  ];

  // Temporary demo data.
  // We will connect this to the actual wishlist and orders later.
  const wishlist = [];
  const orders = [];

  const handleNavigation = (item) => {
    if (item === "Explore Cars") {
      navigate("/cars");
      return;
    }

    setActiveSection(item);
  };

  const handleLogout = () => {
    // Connect this to your actual authentication logout function.
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="flex w-64 flex-col bg-[#14213d] text-white">

        <div className="border-b border-gray-700 p-6">
          <h1 className="text-2xl font-extrabold tracking-wide">
            <span className="text-amber-500">AutoDrive</span>
          </h1>
          <p className="mt-2 text-xs text-gray-400">
            Customer Dashboard
          </p>
        </div>

        <nav className="flex-1 space-y-2 p-4">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.name)}
              className={`flex w-full items-center gap-3 px-4 py-3 text-left font-semibold transition ${
                activeSection === item.name
                  ? "bg-amber-500 text-white"
                  : "text-gray-300 hover:bg-amber-500 hover:text-white"
              }`}
            >
              <span>{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>

        <div className="border-t border-gray-700 p-4">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-3 text-left font-semibold text-red-400 transition hover:bg-amber-500"
          >
             Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="min-w-0 flex-1 p-6 md:p-10">

        <header className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            Customer Portal
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-[#14213d]">
            {activeSection}
          </h2>
        </header>

        {/* Dashboard overview */}
        {activeSection === "Dashboard" && (
          <div>
            <h3 className="text-xl font-bold text-[#14213d]">
              Welcome Back!
            </h3>

            <p className="mt-2 text-gray-500">
              Manage your vehicles, wishlist and orders from one place.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">

              <div className="bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-500">Available Cars</p>
                <h3 className="mt-3 text-3xl font-bold text-[#14213d]">
                  {cars.filter((car) => car.status === "Available").length}
                </h3>
              </div>

              <div className="bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-500">Wishlist Items</p>
                <h3 className="mt-3 text-3xl font-bold text-[#14213d]">
                  {wishlist.length}
                </h3>
              </div>

              <div className="bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-500">My Orders</p>
                <h3 className="mt-3 text-3xl font-bold text-[#14213d]">
                  {orders.length}
                </h3>
              </div>

            </div>

            <div className="mt-8 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#14213d]">
                Looking for your next car?
              </h3>

              <p className="mt-2 text-gray-500">
                Explore our available vehicles and find one that suits you.
              </p>

              <Link
                to="/cars"
                className="mt-5 inline-block bg-amber-500 px-6 py-3 font-bold text-white transition hover:bg-[#14213d]"
              >
                Explore Cars
              </Link>
            </div>
          </div>
        )}

        {/* Wishlist */}
        {activeSection === "My Wishlist" && (
          <div className="bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#14213d]">
              My Wishlist 
            </h3>

            {wishlist.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-gray-500">
                  You haven't added any cars to your wishlist yet.
                </p>

                <Link
                  to="/cars"
                  className="mt-5 inline-block bg-orange-500 px-6 py-3 font-bold text-white"
                >
                  Explore Cars
                </Link>
              </div>
            ) : (
              <p>Your saved vehicles will appear here.</p>
            )}
          </div>
        )}

        {/* Orders */}
        {activeSection === "My Orders" && (
          <div className="bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#14213d]">
              My Orders 
            </h3>

            {orders.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-gray-500">
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
              <p>Your orders will appear here.</p>
            )}
          </div>
        )}

      </main>
    </div>
  );
}

export default CustomerDashboard;