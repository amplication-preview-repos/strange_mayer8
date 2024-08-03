import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  clientId?: SortOrder;
  clientSecret?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
