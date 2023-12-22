import '../extensions/array.extensions';
import { OffersMock } from '../mocks/offers.mock';
import { OfferModel } from '../models/offer.model';

export const useAPIOffers = () => ({
  getAllOffers: async (): Promise<OfferModel[]> => {
    return new Promise<OfferModel[]>((resolve) => {
      setTimeout(() => {
        resolve(OffersMock.data.sortByField('name'));
      }, 1000);
    });
  },
});
