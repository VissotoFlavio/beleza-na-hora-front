import { Star } from 'lucide-react-native';
import React, { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { BoxContent } from '../../../components/BoxContent';
import { Carousel } from '../../../components/Carousel';
import { ViewRow } from '../../../components/ViewRow';
import '../../../extensions/number.extensions';
import {
  CategoriesProfessionalDetails,
  ProfessionalDetailsModel,
  SubCategoriesProfessionalDetails,
} from '../../../models/Professional/details.professional.model';
import { ProfessionalServicesStyle as style } from './ProfessionalCategories.style';
import { ProfessionalCategoriesInfos } from './ProfessionalCategoriesInfos';

export interface ProfessionalServicesProps {
  details: ProfessionalDetailsModel;
  onPressSubCategory?: (idSubCategory: string) => void;
}
export const ProfessionalCategories: FC<ProfessionalServicesProps> = (props): JSX.Element => {
  const { categories } = props.details;

  const handlePressSubCategory = (id: string) => {
    if (props.onPressSubCategory) {
      props.onPressSubCategory(id);
    }
  };

  return (
    <View style={style.container}>
      <BoxContent>
        <Text style={style.title}>Serviços disponíveis</Text>
      </BoxContent>

      <BoxContent style={style.categoryBox}>
        {categories
          .sortByField('name')
          .map((item: CategoriesProfessionalDetails, index: number) => {
            const { subCategories } = item;
            return (
              <View key={item.id} style={style.categoryContainer}>
                <View style={style.categoryTitleContainer}>
                  <Text style={style.categoryTitle}>{item.name}</Text>
                </View>

                <View>
                  <Carousel
                    data={subCategories.sortByField('name')}
                    renderItem={(sub: SubCategoriesProfessionalDetails) => {
                      return (
                        <TouchableOpacity
                          activeOpacity={0.7}
                          onPress={() => handlePressSubCategory(sub.id)}>
                          <ViewRow style={style.subcategoryContainer}>
                            <Image
                              style={style.subcategoryImage}
                              alt={sub.name}
                              source={{ uri: sub.imageUrl }}
                            />
                            <BoxContent style={style.subcategoryContent}>
                              <View style={style.subcategoryTitleContainer}>
                                <Text style={style.subcategoryTitle}>{sub.name}</Text>
                              </View>
                              <View style={style.subcategoryInfosContainer}>
                                <ProfessionalCategoriesInfos
                                  title="Avaliação"
                                  icon={Star}
                                  value={sub.rating.toString()}
                                />
                                <ProfessionalCategoriesInfos
                                  title="Serviços"
                                  value={sub.numberOfServices.formatNumber()}
                                />
                                <ProfessionalCategoriesInfos
                                  title="Valor"
                                  value={sub.price.toCurrency()}
                                />
                              </View>
                            </BoxContent>
                          </ViewRow>
                        </TouchableOpacity>
                      );
                    }}
                  />
                </View>
              </View>
            );
          })}
      </BoxContent>
    </View>
  );
};
