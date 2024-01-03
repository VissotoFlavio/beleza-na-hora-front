import React, { FC } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { CategoryModel, SubCategoryModel } from '../../models/category.model';
import { useCategories } from './context/categories.context';
import { StyleSubCategories } from './style';

export interface CategoriesProps {
  onPress?: (value: string) => void;
}

export const CategoriesSubCategory: FC<CategoriesProps> = (props): JSX.Element => {
  const categoriesContext = useCategories();

  const { categories, categoryActivated } = categoriesContext;

  const handlePress = (value: string): void => {
    if (props.onPress) {
      props.onPress(value);
    }
  };

  return (
    <View>
      {categories?.map((item: CategoryModel, index: number) => {
        if (categoryActivated && categoryActivated !== item.id) {
          return <View key={item.id} style={{ display: 'none' }} />;
        }
        return (
          <View key={item.id} style={StyleSubCategories.containerSub}>
            <Text style={StyleSubCategories.title}>{item.name}</Text>
            <View style={StyleSubCategories.containerScroll}>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                horizontal
                style={StyleSubCategories.scroll}>
                {item.subCategories.map((subItem: SubCategoryModel, subIndex: number) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={StyleSubCategories.itemTouchable}
                      key={subItem.id}
                      onPress={() => handlePress(subItem.id)}>
                      <View style={StyleSubCategories.containerImagem}>
                        <Image
                          style={StyleSubCategories.imagem}
                          alt={item.description}
                          source={{
                            uri:
                              subItem.imageUrl !== ''
                                ? subItem.imageUrl
                                : 'https://t3.ftcdn.net/jpg/03/14/36/24/360_F_314362441_Tx4djxQlxSSRutWEbaWP40jFvbvW0P3J.jpg',
                          }}
                        />
                        <View style={StyleSubCategories.containerText}>
                          <Text style={StyleSubCategories.name}>{subItem.name}</Text>
                          <Text style={StyleSubCategories.value}>A partir de R$ 999,99</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        );
      })}
    </View>
  );
};
