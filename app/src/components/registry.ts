// app/src/components/registry.ts

import { ComponentType, lazy } from 'react';

/**
 * Registry của các component có thể customize bởi client
 * Chỉ đăng ký những component mà client thường xuyên muốn override
 */
export const ComponentRegistry = {
  // Organisms
  Header: lazy(() => import('@/components/organisms/header')),
  
  // Common components (có thể thêm sau)
  // AppButton: lazy(() => import('@/components/common/AppButton')),
} as const;

export type ComponentKey = keyof typeof ComponentRegistry;
export type ComponentType = ComponentType<any>;
