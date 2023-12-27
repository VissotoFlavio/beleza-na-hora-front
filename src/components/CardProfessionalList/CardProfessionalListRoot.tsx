import React, { FC, ReactNode } from 'react';
import { View } from 'react-native';
import { CardProfessionalStyle } from './style';

export interface CardProfessionalListRootProps {
  children: ReactNode;
}

export const CardProfessionalRoot: FC<CardProfessionalListRootProps> = (props): JSX.Element => {
  return <View style={CardProfessionalStyle.container}>{props.children}</View>;
};
