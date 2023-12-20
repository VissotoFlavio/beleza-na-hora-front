import { Gender, UserTokenResponse } from '../models/User/user.model';

export const signIn = async (email: string, password: string): Promise<UserTokenResponse> => {
  return new Promise<UserTokenResponse>((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'asdasdasdasdfjafvsuvbsdbfpçiasdbfpiadbfçikasdfbliskdbflkb',
        user: {
          firstName: 'Flavio',
          lastName: 'Vissoto',
          gender: Gender.male,
          id: 'a8b776a9-b2c0-474c-b4e2-a3b68de408ba',
          phone: '11 965281468',
          email,
        },
      } as UserTokenResponse);
    }, 2000);
  });
};
