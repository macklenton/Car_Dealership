import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cars from '../../features/cars/pages/Cars';
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight text-slate-900">
          <h1 className='text-amber-600'>AutoDrive</h1>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <Link to="/" className="text-slate-900 font-semibold">
            Home
          </Link>
          <Link to="/Cars" className="hover:text-amber-600 transition">
            Cars
          </Link>
          <Link to="/contact" className="hover:text-amber-600 transition">
            Contact
          </Link>
          
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
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-3 text-sm font-medium">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block py-1 text-slate-900 font-semibold"
          >
            Home
          </Link>
          <Link
            to=""
            onClick={() => setMenuOpen(false)}
            className="block py-1 text-slate-700 hover:text-amber-600"
          >
            Cars
          </Link>
          <Link
            to=""
            onClick={() => setMenuOpen(false)}
            className="block py-1 text-slate-700 hover:text-amber-600"
          >
            Contact
          </Link>
          <Link
            to=""
            onClick={() => setMenuOpen(false)}
            className="block text-center bg-slate-900 text-white py-2 rounded-lg"
          >
            Sign In / Register
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Navbar;