import { UserTokenResponse } from '../models/User/user-token.response';

export const signIn = async (email: string, password: string): Promise<UserTokenResponse> => {
  return new Promise<UserTokenResponse>((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'asdasdasdasdfjafvsuvbsdbfpçiasdbfpiadbfçikasdfbliskdbflkb',
        user: {
          name: 'Flavio',
          email,
        },
      } as UserTokenResponse);
    }, 2000);
  });
};
