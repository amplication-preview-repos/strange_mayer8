import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OAuthTokenListRelationFilter } from "../oAuthToken/OAuthTokenListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  oAuthTokens?: OAuthTokenListRelationFilter;
  username?: StringFilter;
};
