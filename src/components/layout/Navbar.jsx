import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logout from "../../features/auth/pages/Logout";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { isAuthenticated, user } = useSelector(
    (state) => state.auth
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        <Link to="/" className="text-xl font-bold tracking-tight">
          <h1 className="text-amber-600">AutoDrive</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <Link to="/" className="hover:text-amber-600">
            Home
          </Link>

          <Link to="/cars" className="hover:text-amber-600">
            Cars
          </Link>

          <Link to="/contact" className="hover:text-amber-600">
            Contact
          </Link>
          <Link to="/customer-dashboard">Dashboard</Link>
          
          <Link
            to="/login"
            className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg transition"
          >
            Sign In
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          className="md:hidden p-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-3 text-sm font-medium">

          <Link to="/" onClick={closeMenu} className="block py-1">
            Home
          </Link>

          <Link to="/cars" onClick={closeMenu} className="block py-1">
            Cars
          </Link>

          <Link to="/contact" onClick={closeMenu} className="block py-1">
            Contact
          </Link>

          {isAuthenticated ? (
            <>
              <Link
                to={
                  user?.role === "seller"
                    ? "/seller-dashboard"
                    : "/customer-dashboard"
                }
                onClick={closeMenu}
                className="block py-1"
              >
                Dashboard
              </Link>

              <Logout />
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={closeMenu}
                className="block py-1"
              >
                Sign In
              </Link>

              <Link
                to="/register"
                onClick={closeMenu}
                className="block bg-slate-900 text-white text-center py-2 rounded-lg"
              >
                Register
              </Link>
            </>
          )}
        </nav>
      )}
    </header>
  );
}

export default Navbar;