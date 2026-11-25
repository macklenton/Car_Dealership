
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cars from "../../../data/cars";

function CustomerDashboard() {
  const [activeSection, setActiveSection] = useState("Dashboard");
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard"},
    { name: "Explore Cars"},
    { name: "My Wishlist"},
    { name: "My Orders"},
  ];

  // Temporary demo data
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
    navigate("/login");
  };

  return (
    <div>

      {/* Sidebar */}
      <aside>

        <div>
          <h1>
            ROYAL<span>CARS</span>
          </h1>
          <p>Customer Dashboard</p>
        </div>

        <nav>
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.name)}
            >
              <span>{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>

        <div>
          <button onClick={handleLogout}>
             Logout
          </button>
        </div>

      </aside>

      {/* Main Content */}
      <main>

        <header>
          <p>Customer Portal</p>
          <h2>{activeSection}</h2>
        </header>

        {/* Dashboard Overview */}
        {activeSection === "Dashboard" && (
          <div>

            <h3>Welcome Back!</h3>

            <p>
              Manage your vehicles, wishlist and orders from one place.
            </p>

            <div>

              <div>
                <p>Available Cars</p>
                <h3>
                  {cars.filter(
                    (car) => car.status === "Available"
                  ).length}
                </h3>
              </div>

              <div>
                <p>Wishlist Items</p>
                <h3>{wishlist.length}</h3>
              </div>

              <div>
                <p>My Orders</p>
                <h3>{orders.length}</h3>
              </div>

            </div>

            <div>
              <h3>Looking for your next car?</h3>

              <p>
                Explore our available vehicles and find one that suits you.
              </p>

              <Link to="/cars">
                Explore Cars
              </Link>
            </div>

          </div>
        )}

        {/* Wishlist */}
        {activeSection === "My Wishlist" && (
          <div>

            <h3>My Wishlist</h3>

            {wishlist.length === 0 ? (
              <div>
                <p>
                  You haven't added any cars to your wishlist yet.
                </p>

                <Link to="/cars">
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
          <div>

            <h3>My Orders</h3>

            {orders.length === 0 ? (
              <div>
                <p>
                  You haven't placed any orders yet.
                </p>

                <Link to="/cars">
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
