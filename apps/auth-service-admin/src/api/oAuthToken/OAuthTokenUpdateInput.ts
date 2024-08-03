import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OAuthTokenUpdateInput = {
  token?: string | null;
  user?: UserWhereUniqueInput | null;
};
