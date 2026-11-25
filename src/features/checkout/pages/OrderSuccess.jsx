
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  CheckCircle,
  CarFront,
  ClipboardList,
  Home,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

function OrderSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  // Receive order information from the checkout page
  const order = location.state?.order;

  useEffect(() => {
    if (!order) {
      navigate("/cars", { replace: true });
    }
  }, [order, navigate]);

  if (!order) {
    return null;
  }

  const car = order.car;

  const formattedPrice = new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(Number(car?.price || 0));

  const orderNumber = order.orderNumber || order.id || "Pending";

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-12">
      <div className="mx-auto max-w-3xl">

        {/* Confirmation Header */}
        <div className="rounded-t-2xl bg-white px-6 py-10 text-center shadow-sm">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle size={48} className="text-green-600" />
          </div>

          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-green-600">
            Order Received
          </p>

          <h1 className="text-3xl font-bold text-slate-900">
            Thank You for Your Order!
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-slate-500">
            Your order has been submitted successfully. We will update you
            once your payment and order details have been verified.
          </p>

          <div className="mt-6 inline-block rounded-lg bg-slate-100 px-5 py-3">
            <p className="text-xs font-medium uppercase text-slate-500">
              Order Number
            </p>
            <p className="mt-1 font-bold text-slate-900">
              {orderNumber}
            </p>
          </div>
        </div>

        {/* Order Details */}
        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <ClipboardList className="text-amber-500" size={23} />
            <h2 className="text-xl font-bold text-slate-900">
              Order Summary
            </h2>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row">
            {car?.image && (
              <img
                src={car.image}
                alt={car.name || "Selected vehicle"}
                className="h-40 w-full rounded-lg object-cover sm:w-52"
              />
            )}

            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-900">
                {car?.name || "Vehicle"}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {car?.year} {car?.make || ""}
              </p>

              <p className="mt-4 text-lg font-bold text-amber-600">
                {formattedPrice}
              </p>
            </div>
          </div>

          <div className="my-6 border-t border-slate-200" />

          <div className="space-y-4">
            <div className="flex justify-between gap-4 text-sm">
              <span className="text-slate-500">Payment Method</span>
              <span className="font-semibold text-slate-800">
                {order.paymentMethod?.toUpperCase() || "M-PESA"}
              </span>
            </div>

            <div className="flex justify-between gap-4 text-sm">
              <span className="text-slate-500">Payment Status</span>
              <span className="font-semibold text-amber-600">
                {order.paymentStatus || "Awaiting Confirmation"}
              </span>
            </div>

            <div className="flex justify-between gap-4 text-sm">
              <span className="text-slate-500">Order Status</span>
              <span className="font-semibold text-green-600">
                {order.status || "Received"}
              </span>
            </div>
          </div>
        </div>

        {/* Delivery Information */}
        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <MapPin className="text-amber-500" size={23} />
            <h2 className="text-xl font-bold text-slate-900">
              Delivery Information
            </h2>
          </div>

          <div className="space-y-3 text-sm text-slate-600">
            <p>
              <span className="font-semibold text-slate-800">
                Customer:
              </span>{" "}
              {order.fullName || "Not provided"}
            </p>

            <p className="flex items-start gap-2">
              <MapPin size={17} className="mt-0.5 shrink-0" />
              {order.address
                ? `${order.address}, ${order.city || ""}`
                : "Delivery address not provided"}
            </p>

            <p className="flex items-center gap-2">
              <Phone size={17} />
              {order.phone || "Not provided"}
            </p>

            <p className="flex items-center gap-2">
              <Mail size={17} />
              {order.email || "Not provided"}
            </p>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
          <h3 className="font-bold text-slate-900">
            What happens next?
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Our team will review your order and confirm the payment status.
            You can use the order tracking page to follow your purchase
            once tracking is available.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/cars"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-amber-500 px-5 py-3 font-semibold text-white transition hover:bg-amber-600"
          >
            <CarFront size={19} />
            Explore More Cars
          </Link>

          <Link
            to="/customer-dashboard"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <Home size={19} />
            Back to Dashboard
          </Link>
        </div>

      </div>
    </div>
  );
}

export default OrderSuccess;
