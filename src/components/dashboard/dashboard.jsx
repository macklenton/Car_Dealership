import StatCard from "./StatCard";
import {
  CarFront,
  ShoppingCart,
  Users,
  DollarSign,
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";

function Dashboard() {
  
  const stats = [
    {
      title: "Total Cars",
      value: 120,
      description: "Vehicles in inventory",
      icon: <CarFront size={25} />,
      color: "bg-blue-100 text-blue-600",
      growth: "+12%",
    },
    {
      title: "Cars Sold",
      value: 45,
      description: "Total vehicles sold",
      icon: <ShoppingCart size={25} />,
      color: "bg-green-100 text-green-600",
      growth: "+8%",
    },
    {
      title: "Customers",
      value: 85,
      description: "Registered customers",
      icon: <Users size={25} />,
      color: "bg-purple-100 text-purple-600",
      growth: "+15%",
    },
    {
      title: "Total Revenue",
      value: "KSh 12.5M",
      description: "Revenue generated",
      icon: <DollarSign size={25} />,
      color: "bg-orange-100 text-orange-600",
      growth: "+10%",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">

      {/* Dashboard Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Dashboard Overview
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Welcome to your car dealership management dashboard.
          </p>
        </div>

        <button className="flex w-fit items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200 transition hover:bg-blue-700">
          <CalendarDays size={18} />
          View Reports
        </button>
      </div>

      {/* Statistics Section */}
      <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            description={stat.description}
            icon={stat.icon}
            color={stat.color}
            growth={stat.growth}
          />
        ))}
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* Sales Overview */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Sales Overview
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Monitor your dealership performance
              </p>
            </div>
            <span className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-600">
              This Year
            </span>
          </div>

          <div className="flex h-64 items-center justify-center rounded-lg bg-slate-50">
            <p className="text-sm text-slate-400">
              Sales chart will appear here
            </p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">
            Recent Activity
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Latest dealership updates
          </p>

          <div className="mt-6 space-y-6">
            {[
              {
                title: "New car added",
                detail: "Toyota Land Cruiser",
                time: "Today",
                color: "bg-blue-500",
              },
              {
                title: "Vehicle sold",
                detail: "BMW X5",
                time: "Yesterday",
                color: "bg-green-500",
              },
              {
                title: "New customer",
                detail: "Customer registered",
                time: "2 days ago",
                color: "bg-purple-500",
              },
              {
                title: "Payment received",
                detail: "KSh 2.5M",
                time: "3 days ago",
                color: "bg-orange-500",
              },
            ].map((activity, index) => (
              <div key={index} className="flex gap-3">
                <div className={`mt-1 h-3 w-3 shrink-0 rounded-full ${activity.color}`} />

                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-slate-800">
                    {activity.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {activity.detail}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 p-6 text-white shadow-lg">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold">
              Manage Your Dealership
            </h2>
            <p className="mt-2 text-sm text-blue-100">
              Keep track of your inventory, customers and sales in one place.
            </p>
          </div>

          <button className="flex w-fit items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50">
            Explore Dashboard
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
