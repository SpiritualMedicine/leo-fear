import type { Result } from './request'
import { api } from '../utils'

import { useRequest } from './request'

export interface User {
  id: string
  username: string
  name: string
  avatar: string
}

export function useCurrentUser(): Result<User> {
  return useRequest(api.get('users/me').json<User>())
}
