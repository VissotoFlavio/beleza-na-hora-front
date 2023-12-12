import { UserTokenResponse } from '../models/User/user-token.response';

export const signIn = async (): Promise<UserTokenResponse> => {
  return new Promise<UserTokenResponse>((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'asdasdasdasdfjafvsuvbsdbfpçiasdbfpiadbfçikasdfbliskdbflkb',
        user: {
          name: 'Flavio',
          email: 'flavio@email.com.br',
        },
      } as UserTokenResponse);
    }, 2000);
  });
};
