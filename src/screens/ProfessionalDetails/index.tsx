import React, { FC, useEffect, useState } from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import '../../extensions/number.extensions';
import { useAPIProfessionals } from '../../hooks/useAPIProfissionals';
import { ProfessionalDetailsModel } from '../../models/Professional/details.professional.model';
import { AppRouterProps } from '../../routes/app.routes';
import { ProfessionalBio } from './ProfessionalBio';
import { ProfessionalCategories } from './ProfessionalCategories/ProfessionalCategories';
import { ProfessionalDetailsScreenStyle as style } from './style';

type ProfessionalDetailsScreen = AppRouterProps<'ProfessionalDetailsScreen'>;

const SEGMENT_HEIGHT = Dimensions.get('screen').height / 4;

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
    <>
      {!details ? (
        <View style={style.loading}>
          <Text>Carregando...</Text>
        </View>
      ) : (
        <View style={style.container}>
          <ScrollView
            style={style.scroll}
            contentContainerStyle={style.scrollContent}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <ProfessionalBio details={details} />
            <ProfessionalCategories details={details} />
          </ScrollView>
        </View>
      )}
    </>
  );
};
