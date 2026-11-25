import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function RoleRoute({ allowedRoles = [], children }) {
  const { isAuthenticated, user } = useSelector(
    (state) => state.auth
  );

  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  if (!user || !allowedRoles.includes(user.role)) {
    const destination =
      user?.role === "seller"
        ? "/seller-dashboard"
        : user?.role === "customer"
          ? "/customer-dashboard"
          : "/";

    return <Navigate to={destination} replace />;
  }

  return children || <Outlet />;
}

export default RoleRoute;
