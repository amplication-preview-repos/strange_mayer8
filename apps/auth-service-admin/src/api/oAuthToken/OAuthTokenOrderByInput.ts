import { SortOrder } from "../../util/SortOrder";

export type OAuthTokenOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  token?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
