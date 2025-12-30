import type { ClientConfig } from './types';

/**
 * Auto-discover tất cả clients trong customize/
 * Sử dụng Vite glob import để tự động scan
 */
const clientModules = import.meta.glob<{ default: ClientConfig }>(
  '../../../customize/*/index.ts'
);

// Tạo CLIENT_LOADERS từ glob import
const CLIENT_LOADERS: Record<string, () => Promise<{ default: ClientConfig }>> = 
  Object.fromEntries(
    Object.entries(clientModules).map(([path, loader]) => {
      // Extract client name từ path: "customize/hitowa/index.ts" -> "hitowa"
      const match = path.match(/customize\/([^/]+)\/index\.ts$/);
      const clientName = match?.[1] || 'unknown';
      return [clientName, loader];
    })
  );

export async function loadClient(name: string): Promise<ClientConfig> {
  const loader = CLIENT_LOADERS[name] || CLIENT_LOADERS.default;
  
  if (!loader) {
    console.warn(`⚠️ Client "${name}" not found, and no default client available.`);
    return {}; // Return empty config as fallback
  }
  
  return (await loader()).default;
}
