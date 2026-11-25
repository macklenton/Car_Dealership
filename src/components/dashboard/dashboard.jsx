import StatCard from "./StatCard";
import {
  CarFront,
  ShoppingCart,
  Users,
  DollarSign,
} from "lucide-react";

function Dashboard() {
  
  const stats = [
    {
      title: "Total Cars",
      value: 120,
      description: "Vehicles in inventory",
      icon: <CarFront />,
    },
    {
      title: "Cars Sold",
      value: 45,
      description: "Total vehicles sold",
      icon: <ShoppingCart />,
    },
    {
      title: "Customers",
      value: 85,
      description: "Registered customers",
      icon: <Users />,
    },
    {
      title: "Total Revenue",
      value: "KSh 12.5M",
      description: "Revenue generated",
      icon: <DollarSign />,
    },
  ];

  return (
    <div>
      <h1>Dashboard Overview</h1>
      <p>Welcome to your car dealership management dashboard.</p>

      <div>
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            description={stat.description}
            icon={stat.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
