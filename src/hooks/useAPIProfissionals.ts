import '../extensions/array.extensions';
import { ProfessionalsMock } from '../mocks/professionals.mock';
import { ProfessionalModel } from '../models/professional.model';

export const useAPIProfessionals = () => ({
  getProfessionals: async (): Promise<ProfessionalModel[]> => {
    return new Promise<ProfessionalModel[]>((resolve) => {
      setTimeout(() => {
        resolve(ProfessionalsMock.data.sortByField('rating', 'desc'));
      }, 700);
    });
  },
});
