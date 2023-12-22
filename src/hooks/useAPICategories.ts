import '../extensions/array.extensions';
import { CategoriesMock } from '../mocks/categories.mock';
import { CategoryModel } from '../models/category.model';

export const useAPICategories = () => ({
  getAllServices: async (): Promise<CategoryModel[]> => {
    return new Promise<CategoryModel[]>((resolve) => {
      setTimeout(() => {
        resolve(CategoriesMock.data.sortByField('name'));
      }, 1000);
    });
  },
});
