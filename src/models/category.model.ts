export interface SubCategoryModel {
  id: string;
  idCategory: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface CategoryModel {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  subCategories: SubCategoryModel[];
}
