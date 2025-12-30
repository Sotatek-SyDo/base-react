// app/src/core/ClientContext.tsx

import { createContext, useContext, ReactNode } from 'react';
import type { ClientConfig } from './types';

const ClientContext = createContext<ClientConfig | undefined>(undefined);

interface ClientProviderProps {
    config?: ClientConfig;
    children: ReactNode;
}

export function ClientProvider({ config, children }: ClientProviderProps) {
    return (
        <ClientContext.Provider value={config}>
            {children}
        </ClientContext.Provider>
    );
}

/**
 * Hook để lấy client config trong bất kỳ component nào
 */
export function useClientConfig(): ClientConfig | undefined {
    return useContext(ClientContext);
}
