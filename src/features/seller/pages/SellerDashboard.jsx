import { Link, useNavigate } from "react-router-dom";
import {
  CarFront,
  ShoppingCart,
  DollarSign,
  Users,
  Plus,
  Eye,
  ClipboardList,
  TrendingUp,
} from "lucide-react";

function SellerDashboard() {
  const stats = [
    {
      title: "Total Cars",
      value: "24",
      icon: CarFront,
      color: "blue",
    },
    {
      title: "Total Sales",
      value: "12",
      icon: ShoppingCart,
      color: "green",
    },
    {
      title: "Total Revenue",
      value: "KES 4.5M",
      icon: DollarSign,
      color: "purple",
    },
    {
      title: "Customers",
      value: "18",
      icon: Users,
      color: "orange",
    },
  ];

  const recentOrders = [
    {
      id: "#ORD001",
      customer: "John Kamau",
      car: "Toyota Prado",
      amount: "KES 4,500,000",
      status: "Completed",
    },
    {
      id: "#ORD002",
      customer: "Mary Wanjiku",
      car: "Mazda CX-5",
      amount: "KES 2,800,000",
      status: "Pending",
    },
    {
      id: "#ORD003",
      customer: "Peter Mwangi",
      car: "BMW X5",
      amount: "KES 5,200,000",
      status: "Processing",
    },
  ];

  return (
    <div>
      {/* Dashboard Header */}
      <div>
        <h1>Seller Dashboard</h1>
        <p>Welcome back! Here's an overview of your dealership.</p>
      </div>

      {/* Statistics Cards */}
      <div>
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div key={index}>
              <div>
                <Icon size={28} />
              </div>

              <h3>{stat.title}</h3>
              <h2>{stat.value}</h2>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div>
        <h2>Quick Actions</h2>

        <div>
          <Link to="/cars">
            <Plus size={20} />
            Add New Car
          </Link>

          <Link to="/orders">
            <ClipboardList size={20} />
            Manage Orders
          </Link>

          <Link to="/sales">
            <TrendingUp size={20} />
            View Sales
          </Link>

          <Link to="/customers">
            <Users size={20} />
            View Customers
          </Link>
        </div>
      </div>

      {/* Recent Orders */}
      <div>
        <div>
          <h2>Recent Orders</h2>

          <Link to="/orders">
            View All
            <Eye size={18} />
          </Link>
        </div>

        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Car</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.car}</td>
                <td>{order.amount}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SellerDashboard;
