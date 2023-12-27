export const enum Gender {
  feminine = 1,
  male = 2,
}
export interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  email: string;
  phone: string;
  imageUrl: string;
}

export interface UserTokenResponse {
  token: string;
  user: UserData;
}
