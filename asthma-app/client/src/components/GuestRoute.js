import { Navigate, Outlet } from 'react-router-dom';

const GuestRoute = ({ token }) => {
  // If logged in, redirect to home
  if (token) {
    return <Navigate to="/home" replace />;
  }

  // If not logged in, render the child routes
  return <Outlet />;
};

export default GuestRoute;