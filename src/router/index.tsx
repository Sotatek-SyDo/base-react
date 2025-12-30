import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { NotificationProvider } from '@/components/templates/notification';

import PrivateRoute from '@/router/PrivateRoute';
import PublicRoute from '@/router/PublicRoute';

import PageLoader from '@/components/molecules/page-loader';

import '@scss/globals.scss';

import { HomePage, LoginPage, MyAccountPage } from '@/router/lazy';
import { ROUTE_PATH } from '@/constants/app';

export default function AppContainer() {
  return (
    <NotificationProvider>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Public */}
            <Route element={<PublicRoute />}>
              <Route path={ROUTE_PATH.LOGIN} element={<LoginPage />} />
            </Route>

            {/* Private */}
            <Route element={<PrivateRoute />}>
              <Route path={ROUTE_PATH.HOME} element={<HomePage />}>
                <Route path={ROUTE_PATH.MY_PROFILE} element={<MyAccountPage />} />
              </Route>
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </NotificationProvider>
  );
}
