import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { resolvePage } from '@/core/resolvePage';
import type { ClientConfig } from '@/core/types';

export function createRouter(client?: ClientConfig) {
  return createBrowserRouter([
    {
      path: '/',
      element: (
        <Suspense fallback={null}>
          {React.createElement(resolvePage('home', client))}
        </Suspense>
      ),
    },
    {
      path: '/login',
      element: (
        <Suspense fallback={null}>
          {React.createElement(resolvePage('login', client))}
        </Suspense>
      ),
    },
    {
      path: '/my-profile',
      element: (
        <Suspense fallback={null}>
          {React.createElement(resolvePage('myAccount', client))}
        </Suspense>
      ),
    },

    ...(client?.routes || []),
  ]);
}
