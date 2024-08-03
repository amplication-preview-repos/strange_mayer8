import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClientWhereInput = {
  clientId?: StringNullableFilter;
  clientSecret?: StringNullableFilter;
  id?: StringFilter;
};
