import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from "./AuthContext";

const GuestRoute = () => {
  const { token } = useAuth();

  // If logged in, redirect to home
  if (token) {
    return <Navigate to="/home" />;
  }

  // If not logged in, render the child routes
  return <Outlet />;
};

export default GuestRoute;