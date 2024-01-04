import React, { ElementType, FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ViewRow } from '../../../components/ViewRow';
import { StyleColor, StyleFont } from '../../../theme';

interface ProfessionalCategoriesInfosProps {
  title: string;
  value: string;
  icon?: ElementType;
}

export const ProfessionalCategoriesInfos: FC<ProfessionalCategoriesInfosProps> = (
  props,
): JSX.Element => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{props.title}</Text>
      <ViewRow>
        {props.icon && <props.icon size={StyleFont.size.md} fill={StyleColor.yellow[400]} />}
        <Text style={style.textValue}>{props.value}</Text>
      </ViewRow>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: StyleFont.color.light,
    fontWeight: 'bold',
  },
  textValue: {
    fontSize: StyleFont.size.md,
    fontWeight: 'bold',
  },
});
