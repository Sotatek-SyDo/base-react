import { PageRegistry, PageKey } from '../router/registry'
import type { ClientConfig } from './types'

export function resolvePage(
  key: PageKey,
  client?: ClientConfig
) {

  // Nếu client có custom page → dùng custom
  if (client?.pages?.[key]) {
    return client.pages[key]
  }

  // Không có custom → dùng page mặc định
  return PageRegistry[key]
}
