// core/src/core/types.ts

import type { ComponentType } from 'react'
import type { RouteObject } from 'react-router-dom'
import type { PageKey } from '../router/registry'
import type { ComponentKey } from '../components/registry'

/**
 * Cấu hình client được phép custom
 * ⚠️ Client KHÔNG được vượt quá contract này
 */
export interface ClientConfig {
  /**
   * Branding: logo, favicon, title
   */
  branding?: {
    appName?: string
    logo?: string
    favicon?: string
  }

  /**
   * Custom page theo key
   * Ví dụ: dashboard, login, home
   */
  pages?: Partial<Record<PageKey, ComponentType>>

  /**
   * Custom component theo key
   * Ví dụ: Header, AppButton
   */
  components?: Partial<Record<ComponentKey, ComponentType>>

  /**
   * Route bổ sung (không phá route mặc định)
   */
  routes?: RouteObject[]
}
