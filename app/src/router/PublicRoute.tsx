import { Navigate, Outlet } from 'react-router-dom';
import { ROUTE_PATH } from '@/constants/app';

export default function PublicRoute() {
  const isAuthenticated = Boolean(localStorage.getItem('access_token'));

  if (isAuthenticated) {
    return <Navigate to={ROUTE_PATH.MY_PROFILE} replace />;
  }

  return <Outlet />;
}
