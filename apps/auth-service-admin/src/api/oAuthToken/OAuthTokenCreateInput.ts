import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OAuthTokenCreateInput = {
  token?: string | null;
  user?: UserWhereUniqueInput | null;
};
