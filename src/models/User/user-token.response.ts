export interface UserTokenResponse {
  token: string;
  user: UserData;
}

export interface UserData {
  name: string;
  email: string;
}
