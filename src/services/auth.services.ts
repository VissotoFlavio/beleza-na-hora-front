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
          imageUrl: 'https://i.pinimg.com/564x/94/a6/66/94a666d648af0de5adb025828cd998a0.jpg',
        },
      } as UserTokenResponse);
    }, 2000);
  });
};
