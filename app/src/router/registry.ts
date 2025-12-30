// core/src/pages/registry.ts

import { HomePage, LoginPage, MyAccountPage } from '@/router/lazy'

/**
 * Danh sách page mặc định của hệ thống
 * MỖI PAGE PHẢI CÓ KEY
 */
export const PageRegistry = {
  home: HomePage,
  login: LoginPage,
  myAccount: MyAccountPage,
}

export type PageKey = keyof typeof PageRegistry
