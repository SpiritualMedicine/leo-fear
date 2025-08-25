import type { Result } from './request'
import { api } from '../utils'

import { useRequest } from './request'

export interface Menu {
  id: string
  label: string
  icon?: string
  name?: string
  params?: { [key: string]: string }
  children?: Menu[]
}

export function useMenus(type: 'main' | 'shortcut' = 'main'): Result<Menu[]> {
  return useRequest(api.get('menus', { searchParams: { type } }).json<Menu[]>())
}
