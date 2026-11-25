import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/hero-img.jpg';
import Navbar from '../../components/layout/Navbar';
import car1 from '../../assets/car1.jpg';
import car2 from '../../assets/car2.jpg';
import car3 from '../../assets/car3.jpg';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
     <Navbar/>

      <main className="flex-1">
  {/* 2. Company Introduction with Background Image */}
  <section
    style={{
      backgroundImage:
       `url(${heroImg})`,
    }}
    className="relative bg-cover bg-center bg-no-repeat text-white"
  >
    {/* Dark Overlay for Text Readability */}
    <div className="absolute inset-0 bg-slate-950/75" aria-hidden="true" />

    {/* Foreground Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      <div className="max-w-2xl space-y-6">
       
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          Drive Confidence. Certified Vehicles Built for Every Road.
        </h1>

        <p className="text-slate-200 text-base sm:text-lg max-w-xl">
          
        </p>
        <Link
          to="/cars"
          className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-6 py-3 rounded-lg transition"
        >
         Explore Cars
        </Link>
    
      </div>
    </div>
  </section>

        {/* 3. About Us & 4. Company Mission and Vision */}
        <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-600">
                About Us
              </h2>
              <h3 className="text-3xl font-bold text-slate-900">
                Over a Decade of Honest Automotive Excellence
              </h3>
              <p className="text-slate-600 leading-relaxed">
               At CAR DEALERSHIP, we believe buying a car should be straightforward, 
               transparent, and worry-free. We carefully source verified, low-mileage 
               local units and direct imports, putting every single vehicle through a 
               strict multi-point inspection and history check so you can drive off with
                total confidence.
              </p>
             
            </div>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="text-lg font-bold text-slate-900 mb-2">Our Mission</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To deliver reliable, thoroughly inspected vehicles backed by upfront pricing,
                  personalized financing support, and long-term after-sales care so every customer
                  drives away with total confidence.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="text-lg font-bold text-slate-900 mb-2">Our Vision</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To be the region most trusted modern dealership—setting the benchmark for
                  integrity, digital convenience, and sustainable mobility solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Featured Vehicles */}
        <section className="bg-white border-y border-slate-200 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-600">
                  Showroom Highlights
                </h2>
                <h3 className="text-3xl font-bold text-slate-900 mt-1">Featured Vehicles</h3>
              </div>
              <Link
                to="/cars"
                className="text-sm font-semibold text-slate-900 hover:text-amber-600 transition"
              >
                View All Cars →
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Vehicle Card 1 */}
              <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
                <img
                  src={car3}
                  alt="2024 Toyota Land Cruiser Prado"
                  className="w-full h-52 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-lg font-bold text-slate-900">
                        2024 Toyota Land Cruiser Prado
                      </h4>
                      <span className="text-base font-bold text-amber-600">KSH 4.5M</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">
                      12,000 km • Diesel • Automatic
                    </p>
                  </div>
                  <Link
                    to="/cars"
                    className="block text-center bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium py-2.5 rounded-lg transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              {/* Vehicle Card 2 */}
              <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
                <img
                  src={car2}
                  alt="2023 Mercedes-Benz C300"
                  className="w-full h-52 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-lg font-bold text-slate-900">
                        2023 Mercedes-Benz C300
                      </h4>
                      <span className="text-base font-bold text-amber-600">Ksh 3.5M</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">
                      18,500 km • Petrol • Automatic
                    </p>
                  </div>
                  <Link
                    to="/cars"
                    className="block text-center bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium py-2.5 rounded-lg transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              {/* Vehicle Card 3 */}
              <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
                <img
                  src={car1}
                  alt="2024 Mazda CX-5 Touring"
                  className="w-full h-52 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-lg font-bold text-slate-900">
                        2024 Mazda CX-5 Touring
                      </h4>
                      <span className="text-base font-bold text-amber-600">Ksh 1.5M</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">
                      9,400 km • Petrol • Automatic
                    </p>
                  </div>
                  <Link
                    to="/cars"
                    className="block text-center bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium py-2.5 rounded-lg transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Why Choose Our Dealership */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              Legacy Auto Co Advantage
            </h2>
            <h3 className="text-3xl font-bold text-slate-900 mt-1">
              Why Choose Our Dealership
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h4 className="text-base font-bold text-slate-900">Certified Inspections</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every car passes a comprehensive 150-point mechanical and history check.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h4 className="text-base font-bold text-slate-900">Transparent Pricing</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Clear, all-inclusive quotes with zero surprise showroom add-ons.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h4 className="text-base font-bold text-slate-900">Flexible Financing</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tailored bank financing and trade-in valuations processed in hours.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h4 className="text-base font-bold text-slate-900">After-Sales Warranty</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Engine and transmission warranty coverage plus dedicated service support.
              </p>
            </div>
          </div>
        </section>

        {/* 7. Customer Testimonials */}
        <section className="bg-slate-900 text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-400">
                Testimonials
              </h2>
              <h3 className="text-3xl font-bold mt-1">What Our Customers Say</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl flex flex-col justify-between space-y-4">
                <p className="text-sm text-slate-200 leading-relaxed">
                  Transparent pricing, verified service history, and zero hidden fees. I
                  drove off the lot the same afternoon.
                </p>
                <div>
                  <p className="font-semibold text-white text-sm">David Kamau</p>
                </div>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl flex flex-col justify-between space-y-4">
                <p className="text-sm text-slate-200 leading-relaxed">
                  The inspection report gave me complete peace of mind. Easily the smoothest
                  car-buying experience I have ever had.
                </p>
                <div>
                  <p className="font-semibold text-white text-sm">Sarah Wanjiku</p>
                </div>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl flex flex-col justify-between space-y-4">
                <p className="text-sm text-slate-200 leading-relaxed">
                 Flexible financing options and honest advice from the sales team. Highly
                  recommend checking their showroom first.
                </p>
                <div>
                  <p className="font-semibold text-white text-sm">Brian Ochieng</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 8. Footer with Contact Information & Navigation Links */}
      <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <div className="space-y-3">
            <p className="text-lg font-bold text-amber-400">
              Legacy Auto Co
            </p>
            <p className="leading-relaxed">
              Quality certified vehicles, honest financing, and dependable after-sales service.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-white">Navigation</p>
            <ul className="space-y-1.5">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-white transition">
                  Cars
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-white transition">
                  Login
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-white">Contact Info</p>
            <p>Mombasa Road Showroom, Nairobi</p>
            <p>Phone: +254 700 123 456</p>
            <p>Email: legacyauto.co.ke</p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-white">Showroom Hours</p>
            <p>Mon – Fri: 8:00 AM – 6:00 PM</p>
            <p>Saturday: 9:00 AM – 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Legacy Auto Co. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;