import { Link } from "react-router-dom";
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

import Sidebar from "../../../components/dashboard/Sidebar";

function SellerDashboard() {
  // Sample dashboard data for the frontend prototype
  const stats = [
    {
      title: "Total Cars",
      value: "6",
      icon: CarFront,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Total Sales",
      value: "0",
      icon: ShoppingCart,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Total Revenue",
      value: "KES 4.5M",
      icon: DollarSign,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Customers",
      value: "18",
      icon: Users,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const recentOrders = [];

  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Seller Sidebar */}
      <Sidebar />

      {/* Main Dashboard Content */}
      <main className="flex-1 min-w-0 p-6 lg:p-8">

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-medium text-amber-600">
            AUTODRIVE MANAGEMENT
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Seller Dashboard
          </h1>

          <p className="mt-2 text-slate-500">
            Welcome back! Here's an overview of your dealership.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">
                      {stat.title}
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-slate-900">
                      {stat.value}
                    </h2>
                  </div>

                  <div className={`rounded-lg p-3 ${stat.color}`}>
                    <Icon size={25} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        

        {/* Recent Orders */}
        <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">

          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Recent Orders
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Overview of your latest customer orders
              </p>
            </div>

            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700"
            >
              View All
              <Eye size={18} />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] text-left">
              <thead>
                <tr className="border-b border-slate-200 text-sm text-slate-500">
                  <th className="px-4 py-3">Order ID</th>
                  <th className="px-4 py-3">Customer</th>
                  <th className="px-4 py-3">Car</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {recentOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-slate-100 text-sm last:border-0"
                  >
                    <td className="px-4 py-4 font-semibold text-slate-800">
                      {order.id}
                    </td>

                    <td className="px-4 py-4 text-slate-600">
                      {order.customer}
                    </td>

                    <td className="px-4 py-4 text-slate-600">
                      {order.car}
                    </td>

                    <td className="px-4 py-4 font-medium text-slate-800">
                      {order.amount}
                    </td>

                    <td className="px-4 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          order.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : order.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </main>
    </div>
  );
}

export default SellerDashboard;