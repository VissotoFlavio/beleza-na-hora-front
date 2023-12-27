import React, { FC, ReactNode } from 'react';
import { View } from 'react-native';
import { CategoryModel } from '../../models/category.model';
import { CategoriesProvider } from './context/categories.context';

export interface CategoriesProps {
  children: ReactNode;
  categories?: CategoryModel[];
  activeCategory?: string;
  onPress?: (value: string) => void;
}

export const CategoriesRoot: FC<CategoriesProps> = (props): JSX.Element => {
  return (
    <CategoriesProvider>
      <View style={{ marginBottom: 25 }}>{props.children}</View>
    </CategoriesProvider>
  );
};
