import React, { FC, useEffect, useState } from 'react';
import { Dimensions, Text, View } from 'react-native';
import { useAPIProfessionals } from '../../hooks/useAPIProfissionals';
import { ProfessionalDetailsModel } from '../../models/Professional/details.professional.model';
import { AppRouterProps } from '../../routes/app.routes';
import { ProfessionalDetailsCardBio } from './ProfessionalDetailsCardBio';
import { ProfessionalDetailsCardCategories } from './ProfessionalDetailsCardCategories';

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
        <View
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Carregando...</Text>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
          }}>
          <View style={{ flex: 1, flexDirection: 'column', rowGap: 10 }}>
            <ProfessionalDetailsCardBio details={details} />
            <ProfessionalDetailsCardCategories details={details} />
          </View>
        </View>
      )}
    </>
    // <>
    //   {details ? (
    //     <View>
    //       <ProfessionalDetailsCardBio details={details} />
    //       {/* <ScrollView
    //         contentContainerStyle={{
    //           paddingBottom: SEGMENT_HEIGHT,
    //         }}>
    //         <View>
    //           <View>
    //             <ProfessionalDetailsCardCategories details={details} />
    //           </View>
    //         </View>
    //       </ScrollView> */}
    //     </View>
    //   ) : (
    //     <View
    //       style={{
    //         display: 'flex',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //       }}>
    //       <Text>Carregando...</Text>
    //     </View>
    //   )}
    // </>
  );
};
