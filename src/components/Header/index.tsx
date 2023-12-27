import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';
import { Gender, UserData } from '../../models/User/user.model';
import { StyleHeader } from './style';

export interface HeaderProps {
  user: UserData;
}

export const Header: FC<HeaderProps> = (props) => {
  return (
    <View style={StyleHeader.container}>
      <View style={StyleHeader.containerText}>
        <Text style={StyleHeader.textName}>Olá, {props.user.firstName}</Text>
        <Text style={StyleHeader.textWelcome}>
          Bem vind{props.user.gender === Gender.feminine ? 'a' : 'o'} ao Beleza na Hora!
        </Text>
      </View>
      <View>
        <Image
          alt={props.user.firstName}
          style={StyleHeader.image}
          source={{
            uri: props.user.imageUrl,
          }}
        />
      </View>
    </View>
  );
};
