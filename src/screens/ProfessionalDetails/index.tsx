import React, { FC, useEffect, useState } from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import { BottomSheet } from '../../components/BottomSheet';
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
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    getDetailsProfessional(props.route.params.idProfessional);
  });

  const getDetailsProfessional = async (id: string) => {
    const response = await apiProfessionals.getDetails(id);
    setDetails(response);
  };

  const toggleModal = () => {
    setModalIsOpen((prevState) => !prevState);
  };

  const handlePressSubCategory = (id: string) => {
    console.log('handlePressSubCategory: ' + id);
    toggleModal();
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
            <ProfessionalCategories details={details} onPressSubCategory={handlePressSubCategory} />
          </ScrollView>
          {modalIsOpen && (
            <BottomSheet onClose={toggleModal}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 24 }}>
                  Exibir detalhes para agendamento do serviço, depoimento dos cliente e fotos
                </Text>
              </View>
            </BottomSheet>
          )}
        </View>
      )}
    </>
  );
};
