import { Search } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button } from '../../components/Button';
import { CardProfessionalList } from '../../components/CardProfessionalList';
import { Categories } from '../../components/Categories';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { InputText } from '../../components/InputText';
import { useAuth } from '../../context/auth.context';
import { useAPICategories } from '../../hooks/useAPICategories';
import { useAPIProfessionals } from '../../hooks/useAPIProfissionals';
import { CategoryModel } from '../../models/category.model';
import { ProfessionalModel } from '../../models/professional.model';

const HomeScreen = () => {
  const authContext = useAuth();
  const apiCategories = useAPICategories();
  const apiProfessionals = useAPIProfessionals();

  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const [categoryId, setCategoryId] = useState('');

  const [professionals, setProfessionals] = useState<ProfessionalModel[]>([]);

  useEffect(() => {
    getCategories();
    getProfissionals();
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

  return (
    <Container showBackground>
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        {/* avatar and Welcome */}
        <Header user={authContext.user} />

        {/* Searchbar */}
        <InputText.Root>
          <InputText.Icon icon={Search} />
          <InputText.Input placeholder="Pesquise um serviço ou profissional" />
        </InputText.Root>

        {/* Services */}
        <View>
          <Categories
            categories={categories}
            onPress={handlePressCategory}
            activeCategory={categoryId}
          />
        </View>

        <View>
          <CardProfessionalList items={professionals} onPress={handlePressProfessional} />
        </View>

        <Button onPress={handlerSair} label="Sair" />
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;
