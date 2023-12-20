import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';
import { Gender, UserData } from '../../models/User/user.model';
import { HeaderStyle } from './style';

export interface HeaderProps {
  user: UserData;
}

const Header: FC<HeaderProps> = (props) => {
  return (
    <View style={HeaderStyle.container}>
      <View>
        <Text>Olá {props.user.firstName}</Text>
        <Text>Bem vind{props.user.gender === Gender.feminine ? 'a' : 'o'} ao Beleza na Hora</Text>
      </View>
      <View>
        <Image
          alt={props.user.firstName}
          style={{
            height: 50,
            width: 50,
          }}
          source={require('../../../assets/images/avatar.png')}
        />
      </View>
    </View>
  );
};

export default Header;
