import React, { FC, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useAPICategories } from '../../hooks/useAPICategories';
import { CategoryModel } from '../../models/category.model';
import { useCategories } from './context/categories.context';
import { StyleCategories } from './style';

export interface CategoriesProps {
  // activeCategory?: string;
  onPress?: (value: string) => void;
}

export const CategoriesCategory: FC<CategoriesProps> = (props): JSX.Element => {
  const categoriesContext = useCategories();
  const apiCategories = useAPICategories();

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const response = await apiCategories.getAllCategories();
    if (categoriesContext) {
      categoriesContext.onSetCategories(response);
    }
  };

  const handlePress = (value: string): void => {
    if (props.onPress) {
      if (value !== categoriesContext.categoryActivated) {
        categoriesContext.onSetActivatedCategories(value);
        props.onPress(value);
      } else {
        categoriesContext.onSetActivatedCategories('');
        props.onPress('');
      }
    }
  };

  return (
    <View style={StyleCategories.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal
        style={StyleCategories.scroll}>
        {categoriesContext.categories?.map((item: CategoryModel, index: number) => {
          const isActive = item.id === categoriesContext.categoryActivated;
          return (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.7}
              onPress={() => handlePress(item.id)}
              style={[StyleCategories.item, isActive ? StyleCategories.activated : null]}>
              <Text style={[isActive ? StyleCategories.activatedText : null]}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};
