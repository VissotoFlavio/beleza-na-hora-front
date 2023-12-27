import { FC, ReactNode, createContext, useContext, useState } from 'react';
import { CategoryModel } from '../../../models/category.model';
import { SubCategoryModel } from '../../../models/subcategory.model';

export interface CategoriesContextProps {
  categories?: CategoryModel[];
  subCategories?: SubCategoryModel[];
  categoryActivated?: string;
  onSetCategories: (values: CategoryModel[]) => void;
  onSetActivatedCategories: (values: string) => void;
}

const CategoriesContext = createContext<CategoriesContextProps>({} as CategoriesContextProps);

export interface CategoriesProviderProps {
  children: ReactNode;
}

export const CategoriesProvider: FC<CategoriesProviderProps> = (props): JSX.Element => {
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const [categoryActivated, setCategoryActivated] = useState('');

  const handleSetCategories = (values: CategoryModel[]) => {
    setCategories(values);
  };

  const handleCategoryActivated = (values: string) => {
    setCategoryActivated(values);
  };

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        // subCategories: props.subCategories,
        categoryActivated,
        onSetCategories: handleSetCategories,
        onSetActivatedCategories: handleCategoryActivated,
      }}>
      {props.children}
    </CategoriesContext.Provider>
  );
};

export const useCategories = (): CategoriesContextProps => {
  const context = useContext(CategoriesContext);
  return context;
};
