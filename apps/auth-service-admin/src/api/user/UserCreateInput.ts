import { OAuthTokenCreateNestedManyWithoutUsersInput } from "./OAuthTokenCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  oAuthTokens?: OAuthTokenCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  username: string;
};
