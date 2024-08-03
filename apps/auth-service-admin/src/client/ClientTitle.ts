import { Client as TClient } from "../api/client/Client";

export const CLIENT_TITLE_FIELD = "clientId";

export const ClientTitle = (record: TClient): string => {
  return record.clientId?.toString() || String(record.id);
};
