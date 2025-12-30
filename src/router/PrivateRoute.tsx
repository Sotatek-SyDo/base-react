import { Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  // const isAuthenticated = Boolean(localStorage.getItem('access_token'));

  // if (!isAuthenticated) {
  //   return <Navigate to={ROUTE_PATH.LOGIN} replace />;
  // }

  return <Outlet />;
}
