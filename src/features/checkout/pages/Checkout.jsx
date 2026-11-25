
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  CreditCard,
  Smartphone,
  MapPin,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  const { user, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  // Get the selected car from the Vehicle Details page
  const car = location.state?.car;

  const [formData, setFormData] = useState({
    fullName: user?.name || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    paymentMethod: "mpesa",
  });

  const [error, setError] = useState("");

  // Only authenticated users can access checkout
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", {
        replace: true,
        state: { from: location },
      });
    } else if (!car) {
      navigate("/cars", { replace: true });
    }
  }, [isAuthenticated, car, navigate, location]);

  if (!isAuthenticated || !car) {
    return null;
  }

  const formattedPrice = new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(Number(car.price));

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.address.trim() ||
      !formData.city.trim()
    ) {
      setError("Please complete all your delivery details.");
      return;
    }

    if (!/^(?:\+254|254|0)(?:7|1)\d{8}$/.test(formData.phone.trim())) {
      setError("Enter a valid Kenyan mobile number.");
      return;
    }

    // Payment service integration will be added here.
    setError(
      "Your details are ready. M-Pesa payment processing has not yet been connected."
    );
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Page Header */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-amber-600"
        >
          <ArrowLeft size={18} />
          Back to vehicle
        </button>

        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            AutoDrive Checkout
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Complete Your Purchase
          </h1>

          <p className="mt-2 text-slate-500">
            Enter your details and select your preferred payment method.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

            {/* Customer Details */}
            <div className="space-y-6 lg:col-span-2">

              <section className="rounded-xl bg-white p-6 shadow-sm">
                <h2 className="mb-5 text-xl font-bold text-slate-900">
                  Customer Information
                </h2>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="example@email.com"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="07XXXXXXXX"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                    />
                  </div>

                </div>
              </section>

              {/* Delivery Details */}
              <section className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center gap-3">
                  <MapPin className="text-amber-600" size={22} />
                  <h2 className="text-xl font-bold text-slate-900">
                    Delivery Information
                  </h2>
                </div>

                <div className="space-y-5">

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Delivery Address
                    </label>

                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      placeholder="House number, street or estate"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Town / City
                    </label>

                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Nairobi"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                    />
                  </div>

                </div>
              </section>

              {/* Payment Method */}
              <section className="rounded-xl bg-white p-6 shadow-sm">
                <h2 className="mb-5 text-xl font-bold text-slate-900">
                  Payment Method
                </h2>

                <label className="flex cursor-pointer items-center gap-4 rounded-lg border-2 border-amber-500 bg-amber-50 p-4">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="mpesa"
                    checked={formData.paymentMethod === "mpesa"}
                    onChange={handleChange}
                    className="accent-amber-600"
                  />

                  <Smartphone className="text-green-600" size={26} />

                  <div>
                    <p className="font-semibold text-slate-900">
                      M-Pesa
                    </p>
                    <p className="text-sm text-slate-500">
                      Pay securely using your mobile phone
                    </p>
                  </div>
                </label>

                <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck size={16} />
                  Your payment will be verified before your order is confirmed.
                </div>
              </section>

            </div>

            {/* Order Summary */}
            <aside className="h-fit rounded-xl bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">
                Order Summary
              </h2>

              <div className="mb-5 overflow-hidden rounded-lg bg-slate-100">
                {car.image && (
                  <img
                    src={car.image}
                    alt={car.name}
                    className="h-48 w-full object-cover"
                  />
                )}
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                {car.name}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {car.year} {car.make || ""}
              </p>

              <div className="my-5 space-y-3 border-y border-slate-200 py-5">
                <div className="flex justify-between gap-3 text-sm">
                  <span className="text-slate-500">Vehicle price</span>
                  <span className="font-semibold text-slate-800">
                    {formattedPrice}
                  </span>
                </div>

                <div className="flex justify-between gap-3 text-sm">
                  <span className="text-slate-500">Delivery</span>
                  <span className="text-slate-500">
                    To be confirmed
                  </span>
                </div>
              </div>

              <div className="mb-6 flex items-center justify-between">
                <span className="font-bold text-slate-900">
                  Vehicle Total
                </span>

                <span className="text-xl font-bold text-amber-600">
                  {formattedPrice}
                </span>
              </div>

              {error && (
                <p className="mb-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-5 py-3 font-semibold text-white transition hover:bg-amber-600"
              >
                <CreditCard size={19} />
                Continue to Payment
              </button>

              <p className="mt-4 text-center text-xs text-slate-400">
                No payment will be collected until a payment gateway is connected.
              </p>
            </aside>

          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
