// import { QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { ConfigProvider } from 'antd';
// import dayjs from 'dayjs';
// import 'dayjs/locale/ja';
// import AppContainer from './router';
// import theme from './shared/antd/themeConfig';
// import { queryClient } from './shared/react-query/queryClient';
// import { ReduxProvider } from './shared/redux/provider';

// dayjs.locale('ja');

// function App() {
//   return (
//     <ReduxProvider>
//       <QueryClientProvider client={queryClient}>
//         <ConfigProvider theme={theme}>
//           <AppContainer />
//           {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
//         </ConfigProvider>
//       </QueryClientProvider>
//     </ReduxProvider>
//   );
// }

// export default App;

import { useEffect, useState, Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRouter } from '@/router/routes';
import { loadClient } from '@/core/loadClient';
import { ClientProvider } from '@/core/ClientContext';
import type { ClientConfig } from '@/core/types';

export default function App() {
  const [client, setClient] = useState<ClientConfig | undefined>();
  const [router, setRouter] = useState<any>(null);

  useEffect(() => {
    const clientName = import.meta.env.VITE_CLIENT || 'default';

    loadClient(clientName).then((cfg) => {
      setClient(cfg);
      setRouter(createRouter(cfg));
    });
  }, []);

  if (!router) return null;

  return (
    <ClientProvider config={client}>
      <Suspense fallback={null}>
        <RouterProvider router={router} />
      </Suspense>
    </ClientProvider>
  );
}
