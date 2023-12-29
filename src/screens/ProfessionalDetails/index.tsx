import React, { FC, useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import { Container } from '../../components/Container';
import { useAPIProfessionals } from '../../hooks/useAPIProfissionals';
import {
  CategoriesProfessionalDetails,
  ProfessionalDetailsModel,
  SubCategoriesProfessionalDetails,
} from '../../models/Professional/details.professional.model';
import { AppRouterProps } from '../../routes/app.routes';
import { ProfessionalDetailsCardBio } from './ProfessionalDetailsCardBio';

type ProfessionalDetailsScreen = AppRouterProps<'ProfessionalDetailsScreen'>;

export const ProfessionalDetailsScreen: FC<ProfessionalDetailsScreen> = (props): JSX.Element => {
  const apiProfessionals = useAPIProfessionals();

  const [details, setDetails] = useState<ProfessionalDetailsModel | undefined>(undefined);

  useEffect(() => {
    getDetailsProfessional(props.route.params.idProfessional);
  });

  const getDetailsProfessional = async (id: string) => {
    const response = await apiProfessionals.getDetails(id);
    setDetails(response);
  };
  return (
    <View>
      {details && (
        <View>
          {/* Container Image */}
          <View>
            <Image
              style={{
                resizeMode: 'cover',
              }}
              height={Dimensions.get('screen').height / 3}
              width={Dimensions.get('screen').width}
              alt={details.firstName + ' ' + details.lastName}
              source={{
                uri: details.imageUrl,
              }}
            />
          </View>

          <ScrollView>
            <Container>
              {/* Card Details */}
              <ProfessionalDetailsCardBio details={details} />

              {/* Categories and Subcategories */}
              <View>
                {details.categories.map(
                  (category: CategoriesProfessionalDetails, index: number) => {
                    return (
                      <View key={category.id}>
                        <Text>{category.name}</Text>
                        {category.subCategories.map(
                          (subCategory: SubCategoriesProfessionalDetails, indexSub: number) => {
                            return (
                              <View key={subCategory.id}>
                                <Text>{subCategory.name}</Text>
                                <Text>{subCategory.numberOfServices}</Text>
                              </View>
                            );
                          },
                        )}
                      </View>
                    );
                  },
                )}
              </View>
            </Container>
          </ScrollView>
        </View>
      )}
    </View>
  );
};
