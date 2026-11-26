import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  CarFront,
  ShoppingCart,
  Users,
  MessageSquare,
} from "lucide-react";

import Sidebar from "../../../components/dashboard/Sidebar";
import cars from "../../../data/cars";

function SellerDashboard() {
  const [searchParams] = useSearchParams();

  const activeSection = searchParams.get("section") || "dashboard";

  const [orders, setOrders] = useState([]);
  const [messages, setMessages] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(
      localStorage.getItem("autodrive_orders") || "[]"
    );

    const savedMessages = JSON.parse(
      localStorage.getItem("autodrive_messages") || "[]"
    );

    const savedUsers = JSON.parse(
      localStorage.getItem("autoDrive_users") || "[]"
    );

    setOrders(savedOrders);
    setMessages(savedMessages);

    setCustomers(
      savedUsers.filter((user) => user.role === "customer")
    );
  }, []);

  const stats = [
    {
      title: "Total Cars",
      value: cars.length,
      icon: CarFront,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Total Orders",
      value: orders.length,
      icon: ShoppingCart,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Customers",
      value: customers.length,
      icon: Users,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Messages",
      value: messages.length,
      icon: MessageSquare,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const formatPrice = (amount) =>
    `KES ${Number(amount || 0).toLocaleString("en-KE")}`;

  const getCarName = (order) => {
    const car = order.car;

    if (!car) return "Car details unavailable";

    return (
      `${car.make || ""} ${car.model || ""}`.trim() ||
      car.name ||
      "Car details unavailable"
    );
  };

  const OrderTable = ({ orderList }) => (
    orderList.length === 0 ? (
      <p className="py-8 text-center text-gray-500">
        No customer orders found.
      </p>
    ) : (
      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px] text-left">
          <thead>
            <tr className="border-b text-sm text-gray-500">
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Car</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {orderList.map((order, index) => (
              <tr
                key={order.orderNumber || order.id || index}
                className="border-b last:border-0"
              >
                <td className="px-4 py-4 font-medium text-[#14213d]">
                  {order.orderNumber || order.id || "N/A"}
                </td>

                <td className="px-4 py-4">
                  <p className="font-medium text-gray-800">
                    {order.fullName || "Unknown"}
                  </p>
                  <p className="text-xs text-gray-500">
                    {order.email || order.customerEmail || ""}
                  </p>
                </td>

                <td className="px-4 py-4 text-gray-700">
                  {getCarName(order)}
                </td>

                <td className="px-4 py-4 font-semibold text-gray-800">
                  {formatPrice(order.car?.price || order.amount)}
                </td>

                <td className="px-4 py-4">
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                    {order.status || "Received"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  );

  const pageTitles = {
    dashboard: "Seller Dashboard",
    orders: "Customer Orders",
    customers: "Registered Customers",
    messages: "Customer Messages",
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <main className="min-w-0 flex-1 p-6 lg:p-8">

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#14213d]">
            {pageTitles[activeSection] || "Seller Dashboard"}
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your dealership and customer activity.
          </p>
        </div>

        {/* Dashboard Overview */}
        {activeSection === "dashboard" && (
          <>
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
                        <p className="text-sm text-gray-500">
                          {stat.title}
                        </p>
                        <h2 className="mt-2 text-2xl font-bold text-[#14213d]">
                          {stat.value}
                        </h2>
                      </div>

                      <div className={`rounded-lg p-3 ${stat.color}`}>
                        <Icon size={24} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-[#14213d]">
                    Recent Orders
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Latest orders submitted by customers.
                  </p>
                </div>

                <span className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-600">
                  {orders.length} Orders
                </span>
              </div>

              <OrderTable orderList={[...orders].reverse().slice(0, 5)} />
            </section>
          </>
        )}

        {/* All Orders */}
        {activeSection === "orders" && (
          <section className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-[#14213d]">
                All Customer Orders
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                View orders submitted by your customers.
              </p>
            </div>

            <OrderTable orderList={[...orders].reverse()} />
          </section>
        )}

        {/* Customers */}
        {activeSection === "customers" && (
          <section className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-[#14213d]">
                Registered Customers
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Customers registered on AutoDrive.
              </p>
            </div>

            {customers.length === 0 ? (
              <p className="py-8 text-center text-gray-500">
                No registered customers found.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left">
                  <thead>
                    <tr className="border-b text-sm text-gray-500">
                      <th className="px-4 py-3">Customer Name</th>
                      <th className="px-4 py-3">Email Address</th>
                      <th className="px-4 py-3">Account Type</th>
                    </tr>
                  </thead>

                  <tbody>
                    {customers.map((customer) => (
                      <tr
                        key={customer.id || customer.email}
                        className="border-b last:border-0"
                      >
                        <td className="px-4 py-4 font-medium text-gray-800">
                          {customer.name}
                        </td>

                        <td className="px-4 py-4 text-gray-600">
                          {customer.email}
                        </td>

                        <td className="px-4 py-4">
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                            Customer
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}

        {/* Messages */}
        {activeSection === "messages" && (
          <section className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-[#14213d]">
                Customer Messages
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Messages submitted through the Contact page.
              </p>
            </div>

            {messages.length === 0 ? (
              <p className="py-8 text-center text-gray-500">
                No customer messages yet.
              </p>
            ) : (
              <div className="space-y-4">
                {[...messages].reverse().map((message) => (
                  <div
                    key={message.id}
                    className="rounded-lg border border-gray-200 p-4"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-[#14213d]">
                          {message.subject}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                          {message.name} · {message.email}
                        </p>
                      </div>

                      <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                        {message.status || "Pending"}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {message.message}
                    </p>

                    <p className="mt-3 text-xs text-gray-400">
                      {message.date
                        ? new Date(message.date).toLocaleString()
                        : "Date unavailable"}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

      </main>
    </div>
  );
}

export default SellerDashboard;