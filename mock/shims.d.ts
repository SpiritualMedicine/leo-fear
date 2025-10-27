import type { Role, User } from "./data";

declare global {
  namespace Express {
    export type Request = {
      user?: User;
      can: (role: Role) => boolean;
    };
  }
}
