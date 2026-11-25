import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  LayoutDashboard,
  CarFront,
  ShoppingCart,
  Users,
  ClipboardList,
  MessageSquare,
  BarChart3,
  Settings,
  Logout,
} from "lucide-react";

import { logoutUser } from "../../features/auth/authSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const menuItems = [
    {
      name: "Dashboard",
      path: "/seller-dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Cars Inventory",
      path: "/cars",
      icon: CarFront,
    },
    {
      name: "Sales",
      path: "/sales",
      icon: ShoppingCart,
    },
    {
      name: "Orders",
      path: "/orders",
      icon: ClipboardList,
    },
    {
      name: "Customers",
      path: "/customers",
      icon: Users,
    },
    {
      name: "Messages",
      path: "/messages",
      icon: MessageSquare,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: BarChart3,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login", { replace: true });
  };

  return (
    <aside className="flex min-h-screen w-64 shrink-0 flex-col bg-slate-900 px-5 py-6 text-white shadow-xl">

      {/* Logo */}
      <div className="mb-10 px-2">
        <h2 className="text-2xl font-bold tracking-wide text-amber-500">
          AutoDrive
        </h2>

        <p className="mt-1 text-xs text-slate-400">
          Seller Management
        </p>
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
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-amber-500 text-white shadow-lg"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
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

      {/* Seller Information and Logout */}
      <div className="border-t border-slate-700 pt-5">

        <div className="mb-4 rounded-lg bg-slate-800 p-3">
          <p className="truncate text-sm font-semibold text-white">
            {user?.name || "Seller Account"}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Seller
          </p>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-red-400 transition hover:bg-red-500/10 hover:text-red-300"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>

      </div>
    </aside>
  );
}

export default Sidebar;
