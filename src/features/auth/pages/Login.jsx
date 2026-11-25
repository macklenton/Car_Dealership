import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, clearAuthError } from "../authSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, user, error, loading } = useSelector(
    (state) => state.auth
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localError, setLocalError] = useState("");

  useEffect(() => {
    dispatch(clearAuthError());
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated && user) {
      const destination =
        user.role === "seller"
          ? "/seller-dashboard"
          : "/customer-dashboard";

      navigate(destination, { replace: true });
    }
  }, [isAuthenticated, user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password) {
      setLocalError("Please enter both email and password.");
      return;
    }

    setLocalError("");
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-sm p-8 space-y-6">

        <div className="text-center space-y-1">
          <Link to="/" className="text-2xl font-bold text-slate-900 inline-block">
            Apex<span className="text-amber-600">Motors</span>
          </Link>

          <h1 className="text-lg font-semibold text-slate-800 pt-2">
            Welcome Back
          </h1>

          <p className="text-sm text-slate-500">
            Sign in to access your account
          </p>
        </div>

        {(localError || error) && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
            {localError || error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setLocalError("");
              }}
              placeholder="you@example.com"
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setLocalError("");
              }}
              placeholder="Enter your password"
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white text-sm font-semibold py-2.5 rounded-lg transition"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

        </form>

        <p className="text-center text-xs text-slate-600 pt-2 border-t border-slate-100">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-amber-600 font-semibold hover:underline"
          >
            Create an account
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;
