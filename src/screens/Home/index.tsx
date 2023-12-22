import { Search } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Button } from '../../components/Button';
import { CardOffersList } from '../../components/CardOffersList';
import { CardProfessionalList } from '../../components/CardProfessionalList';
import { Categories } from '../../components/Categories';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { InputText } from '../../components/InputText';
import { Link } from '../../components/Link';
import { BoxContainer } from '../../components/boxContainer';
import { useAuth } from '../../context/auth.context';
import { useAPICategories } from '../../hooks/useAPICategories';
import { useAPIOffers } from '../../hooks/useAPIOffers';
import { useAPIProfessionals } from '../../hooks/useAPIProfissionals';
import { CategoryModel } from '../../models/category.model';
import { OfferModel } from '../../models/offer.model';
import { ProfessionalModel } from '../../models/professional.model';
import { StyleFontTitle } from '../../theme';
import { HomeScreenStyle } from './style';

const HomeScreen = () => {
  const authContext = useAuth();
  const apiCategories = useAPICategories();
  const apiProfessionals = useAPIProfessionals();
  const apiOffers = useAPIOffers();

  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const [categoryId, setCategoryId] = useState('');

  const [professionals, setProfessionals] = useState<ProfessionalModel[]>([]);
  const [offers, setOffers] = useState<OfferModel[]>([]);

  useEffect(() => {
    getCategories();
    getProfissionals();
    getOffers();
  }, []);

  const getCategories = async () => {
    const response = await apiCategories.getAllServices();
    setCategories(response);
    setCategoryId(response[0].id);
  };

  const getProfissionals = async () => {
    const response = await apiProfessionals.getProfessionals();
    setProfessionals(response);
  };

  const getOffers = async () => {
    const response = await apiOffers.getAllOffers();
    setOffers(response);
  };

  const handlerSair = async () => {
    await authContext.signOut();
  };

  const handlePressCategory = (value: string) => {
    setCategoryId(value);
    console.log('handlePressCategory: ' + value);
  };

  const handlePressProfessional = (value: string) => {
    console.log('handlePressProfessional: ' + value);
  };

  const handlePressOffer = (value: string) => {
    console.log('handlePressOffer: ' + value);
  };

  return (
    <Container showBackground>
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        {/* avatar and Welcome */}
        <Header user={authContext.user} />

        {/* Searchbar */}
        <BoxContainer>
          <InputText.Root>
            <InputText.Icon icon={Search} />
            <InputText.Input placeholder="Pesquise um serviço ou profissional" />
          </InputText.Root>
        </BoxContainer>

        {/* Services */}
        <BoxContainer>
          <Categories
            categories={categories}
            onPress={handlePressCategory}
            activeCategory={categoryId}
          />
        </BoxContainer>

        <BoxContainer>
          <View style={HomeScreenStyle.professionalTitles}>
            <Text style={StyleFontTitle.xl}>Profissionais recomendados</Text>
            <Link label="Ver todos" />
          </View>
          <CardProfessionalList items={professionals} onPress={handlePressProfessional} />
        </BoxContainer>

        <BoxContainer>
          <View style={HomeScreenStyle.professionalTitles}>
            <Text style={StyleFontTitle.xl}>Ofertas em destaque</Text>
            <Link label="Ver todas" />
          </View>
          <CardOffersList items={offers} onPress={handlePressOffer} />
        </BoxContainer>

        <Button onPress={handlerSair} label="Sair" />
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;
