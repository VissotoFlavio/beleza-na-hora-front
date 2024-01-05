import React, { FC, useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { BottomSheet } from '../../components/BottomSheet';
import { TabBarView, TabBarViewRoute } from '../../components/TabBarView';
import '../../extensions/number.extensions';
import { useAPIProfessionals } from '../../hooks/useAPIProfissionals';
import { ProfessionalDetailsModel } from '../../models/Professional/details.professional.model';
import { AppRouterProps } from '../../routes/app.routes';
import { ProfessionalBio } from './ProfessionalBio';
import { ProfessionalCategories } from './ProfessionalCategories/ProfessionalCategories';
import { TabViewComments } from './TabViewScene/Comments';
import { TabViewPhotos } from './TabViewScene/Photos';
import { TabViewSchedule } from './TabViewScene/Schedule';
import { ProfessionalDetailsScreenStyle as style } from './style';

type ProfessionalDetailsScreen = AppRouterProps<'ProfessionalDetailsScreen'>;

export const ProfessionalDetailsScreen: FC<ProfessionalDetailsScreen> = (props): JSX.Element => {
  const apiProfessionals = useAPIProfessionals();

  const [details, setDetails] = useState<ProfessionalDetailsModel | undefined>(undefined);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [tabRoutes] = useState([
    {
      key: 'schedule',
      title: 'Agendamento',
    } as TabBarViewRoute,
    {
      key: 'comments',
      title: 'Depoimentos',
    },
    {
      key: 'photos',
      title: 'Fotos',
    },
  ]);

  const [renderViews] = useState({
    schedule: TabViewSchedule,
    comments: TabViewComments,
    photos: TabViewPhotos,
  });

  console.log(renderViews);

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
              <TabBarView routes={tabRoutes} views={renderViews} />
            </BottomSheet>
          )}
        </View>
      )}
    </>
  );
};
