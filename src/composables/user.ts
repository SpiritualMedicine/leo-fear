import { api } from "../utils";
import type { Result } from "./request";

import { useRequest } from "./request";

export type User = {
  id: string;
  username: string;
  name: string;
  avatar: string;
};

export function useCurrentUser(): Result<User> {
  return useRequest(api.get("users/me").json<User>());
}
