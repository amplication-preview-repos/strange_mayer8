import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OAuthTokenWhereInput = {
  id?: StringFilter;
  token?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
