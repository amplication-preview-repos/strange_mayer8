import { OAuthToken as TOAuthToken } from "../api/oAuthToken/OAuthToken";

export const OAUTHTOKEN_TITLE_FIELD = "token";

export const OAuthTokenTitle = (record: TOAuthToken): string => {
  return record.token?.toString() || String(record.id);
};
