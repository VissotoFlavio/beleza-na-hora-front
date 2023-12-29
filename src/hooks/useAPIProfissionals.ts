import '../extensions/array.extensions';
import { ProfessionalsDetailsMock } from '../mocks/professionals-details.mock';
import { ProfessionalsMock } from '../mocks/professionals.mock';
import { ProfessionalDetailsModel } from '../models/Professional/details.professional.model';
import { ProfessionalModel } from '../models/Professional/professional.model';

export const useAPIProfessionals = () => ({
  getNearby: async (): Promise<ProfessionalModel[]> => {
    return new Promise<ProfessionalModel[]>((resolve) => {
      setTimeout(() => {
        resolve(ProfessionalsMock.data.sortByField('rating', 'desc'));
      }, 700);
    });
  },
  getDetails: async (idProfessional: string): Promise<ProfessionalDetailsModel> => {
    return new Promise<ProfessionalDetailsModel>((resolve) => {
      setTimeout(() => {
        const response = ProfessionalsDetailsMock.data.filter((x) => x.id === idProfessional);
        if (!response) {
          resolve({} as ProfessionalDetailsModel);
        }
        resolve(response[0]);
      }, 500);
    });
  },
});
