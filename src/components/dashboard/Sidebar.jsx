import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  CarFront,
  ShoppingCart,
  Users,
  ClipboardList,
  MessageSquare,
  BarChart3,
  LogOut,
} from "lucide-react";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Sales", path: "/sales", icon: ShoppingCart },
    { name: "Customers", path: "/customers", icon: Users },
    { name: "Messages", path: "/messages", icon: MessageSquare },
  ];

  return (
    <aside className="flex h-screen w-64 flex-col bg-slate-900 px-5 py-6 text-white shadow-xl">

      {/* Logo */}
      <div className="mb-10 flex items-center gap-3 px-2">
        

        <h2 className="text-2xl font-bold tracking-wide text-amber-500">
          AutoDrive
        </h2>
      </div>

      {/* Navigation */}
      <div className="flex-1">
        <p className="mb-4 px-3 text-xs font-semibold tracking-widest text-slate-400">
          MAIN MENU
        </p>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-amber-500 text-white shadow-lg shadow-blue-900/30"
                      : "text-slate-300 hover:bg-amber-600 hover:text-white"
                  }`
                }
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Sidebar Bottom */}
      <div className="border-t border-slate-700 pt-5">
        <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-red-400 transition hover:bg-red-500/10 hover:text-red-300">
          <LogOut size={20} />
          <span>Logout</span>
        </button>

        <div className="mt-5 rounded-lg bg-slate-800 p-3">
          <p className="text-xs font-semibold text-white">
              AutoDrive Seller
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Management Panel
          </p>
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;
