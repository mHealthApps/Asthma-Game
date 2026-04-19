import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from "./AuthContext";

const ProtectedRoute = () => {
  const { token } = useAuth();

  // If not authenticated, redirect to login
  if (!token) {
    return <Navigate to="/login"/>;
  }

  // If authenticated, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;