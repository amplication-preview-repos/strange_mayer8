import { OAuthToken } from "../oAuthToken/OAuthToken";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  oAuthTokens?: Array<OAuthToken>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
