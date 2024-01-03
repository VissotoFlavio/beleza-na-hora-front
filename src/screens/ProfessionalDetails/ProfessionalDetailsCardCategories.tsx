import React, { FC } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { BoxContainer } from '../../components/BoxContainer';
import { Carousel } from '../../components/Carousel';
import { RatingStar } from '../../components/RatingStar';
import { ViewRow } from '../../components/ViewRow';
import {
  CategoriesProfessionalDetails,
  ProfessionalDetailsModel,
  SubCategoriesProfessionalDetails,
} from '../../models/Professional/details.professional.model';
import { StyleFontTitle } from '../../theme';
import './../../extensions/number.extensions';
import { StyleProfessionalDetailsCardCategories as style } from './ProfessionalDetailsCardCategories.style';

export interface ProfessionalDetailsCardCategoriesProps {
  details: ProfessionalDetailsModel;
}

export const ProfessionalDetailsCardCategories: FC<ProfessionalDetailsCardCategoriesProps> = (
  props,
): JSX.Element => {
  const formatNumberServices = (value: number): string => {
    return '1.2 K';
  };

  const formatWorkingSice = (value: number): string => {
    return 'Janeiro 2022';
  };

  return (
    <View style={style.container}>
      <BoxContainer>
        <Text style={StyleFontTitle.lg}>Serviços realizados pelo profissional</Text>
      </BoxContainer>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.containerContent}>
        {props.details.categories
          .sortByField('name')
          .map((category: CategoriesProfessionalDetails, index: number) => {
            return (
              <View key={category.id} style={style.categoryContainer}>
                <Text style={style.categoryName}>{category.name}</Text>
                <View style={style.containerScroll}>
                  <Carousel
                    data={category.subCategories}
                    renderItem={(subCategory: SubCategoriesProfessionalDetails) => {
                      return (
                        <TouchableOpacity activeOpacity={0.7}>
                          <ViewRow style={style.subCategoryContent}>
                            {/* Image */}
                            <View style={{ height: '100%' }}>
                              <Image
                                alt={subCategory.name}
                                source={{
                                  uri: subCategory.imageUrl,
                                }}
                                style={style.subCategoryImage}
                              />
                            </View>
                            {/* Descriptions */}
                            <View style={style.subCategoryContainerDescptions}>
                              <View>
                                <Text style={style.subCategoryName}>{subCategory.name}</Text>
                              </View>
                              <ViewRow style={style.ratingContainer}>
                                <RatingStar value={subCategory.rating} size="md" />
                                <Text>({subCategory.rating})</Text>
                              </ViewRow>
                              <ViewRow>
                                <Text>Atendimentos: </Text>
                                <Text>{subCategory.numberOfServices}</Text>
                              </ViewRow>
                              <ViewRow style={style.priceContainer}>
                                <Text>Valor:</Text>
                                <Text>{subCategory.price.toCurrency()}</Text>
                              </ViewRow>
                            </View>
                          </ViewRow>
                        </TouchableOpacity>
                      );
                    }}
                  />
                </View>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};
