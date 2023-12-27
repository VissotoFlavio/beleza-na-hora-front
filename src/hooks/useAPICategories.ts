import '../extensions/array.extensions';
import { CategoriesMock } from '../mocks/category.mock';
import { CategoryModel, SubCategoryModel } from '../models/category.model';

export const useAPICategories = () => ({
  // getAllCategoryAndSubcategory: async (): Promise<CategoryModel[]> => {
  //   return new Promise<CategoryModel[]>((resolve) => {
  //     setTimeout(() => {
  //       resolve(CategoriesMock.data.sortByField('name'));
  //     }, 1000);
  //   });
  // },

  getAllCategories: async (): Promise<CategoryModel[]> => {
    return new Promise<CategoryModel[]>((resolve) => {
      setTimeout(() => {
        // const resultRequest = CategoriesMock.data.map((c) => {
        //   const newC = c as CategoryModel;
        //   delete newC.subCategories;
        //   return newC;
        // });
        // resolve(resultRequest.sortByField('name'));
        resolve(CategoriesMock.data.sortByField('name'));
      }, 1000);
    });
  },

  getSubcategories: async (idCategory: string): Promise<SubCategoryModel[]> => {
    return new Promise<SubCategoryModel[]>((resolve) => {
      setTimeout(() => {
        const resultRequest = CategoriesMock.data;
        const result = resultRequest.find((x) => x.id === idCategory);
        resolve(result ? result.subCategories : []);
      }, 500);
    });
  },
});
