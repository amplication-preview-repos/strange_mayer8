import { User } from "../user/User";

export type OAuthToken = {
  createdAt: Date;
  id: string;
  token: string | null;
  updatedAt: Date;
  user?: User | null;
};
