import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import Container from '../../components/Container';
import ImageLogo from '../../components/ImageLogoWelcome/ImageLogo';
import TitleApp from '../../components/TitleApp';
import { WelcomeStyles } from './style';

// type Props = ScreenProps<"Welcome">;

const WelcomeScreen: React.FC = (): React.JSX.Element => {
  const navigation = useNavigation();
  return (
    <Container className="flex flex-1 justify-around">
      <View style={WelcomeStyles.container}>
        <TitleApp />
      </View>
      <View style={WelcomeStyles.content}>
        <ImageLogo showBackground={true} height={50} width={80} />
      </View>
    </Container>
  );
};

export default WelcomeScreen;
