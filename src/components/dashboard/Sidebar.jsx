import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  CarFront,
  ShoppingCart,
  Users,
  ClipboardList,
  MessageSquare,
  BarChart3,
  Settings,
  LogOut,
  X,
} from "lucide-react";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Cars Inventory", path: "/cars", icon: CarFront },
    { name: "Sales", path: "/sales", icon: ShoppingCart },
    { name: "Orders", path: "/orders", icon: ClipboardList },
    { name: "Customers", path: "/customers", icon: Users },
    { name: "Messages", path: "/messages", icon: MessageSquare },
    { name: "Reports", path: "/reports", icon: BarChart3 },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <CarFront size={32} />
        <h2>
          Auto<span>Drive</span>
        </h2>
      </div>

      <div className="sidebar-menu">
        <p className="menu-title">MAIN MENU</p>

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </div>

      <div className="sidebar-bottom">
        <button className="logout-btn">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
