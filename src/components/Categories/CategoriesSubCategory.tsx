import React, { FC, useEffect } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useAPICategories } from '../../hooks/useAPICategories';
import { CategoryModel, SubCategoryModel } from '../../models/category.model';
import { useCategories } from './context/categories.context';
import { StyleSubCategories } from './style';

export interface CategoriesProps {
  onPress?: (value: string) => void;
}

export const CategoriesSubCategory: FC<CategoriesProps> = (props): JSX.Element => {
  const categoriesContext = useCategories();
  const apiCategories = useAPICategories();

  const { categories, categoryActivated } = categoriesContext;

  // const [subCategories, setSubCategories] = useState<SubCategoryModel[]>([]);

  useEffect(() => {
    getSubCategories();
  }, [categoriesContext.categoryActivated]);

  const getSubCategories = async () => {
    // if (categoriesContext.categoryActivated) {
    //   const response = await apiCategories.getSubcategories(categoriesContext.categoryActivated);
    //   setSubCategories(response);
    // }
  };

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
                      style={StyleSubCategories.item}
                      key={subItem.id}>
                      <Image
                        alt={item.description}
                        source={{
                          uri:
                            subItem.imageUrl !== ''
                              ? subItem.imageUrl
                              : 'https://t3.ftcdn.net/jpg/03/14/36/24/360_F_314362441_Tx4djxQlxSSRutWEbaWP40jFvbvW0P3J.jpg',
                        }}
                        style={StyleSubCategories.img}
                      />
                      <Text>{subItem.name}</Text>
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
