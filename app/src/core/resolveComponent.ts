// app/src/core/resolveComponent.ts

import { ComponentRegistry, ComponentKey } from '@/components/registry';
import type { ClientConfig } from './types';
import type { ComponentType } from 'react';

/**
 * Resolve component: ưu tiên custom của client, fallback về default
 * Tương tự resolvePage nhưng cho component
 */
export function resolveComponent(
  key: ComponentKey,
  client?: ClientConfig
): ComponentType<any> {
  // Nếu client có custom component → dùng custom
  if (client?.components?.[key]) {
    return client.components[key];
  }

  // Không có custom → dùng component mặc định
  return ComponentRegistry[key];
}
