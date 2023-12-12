import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { ColorName } from '../../theme';
import { LinkStyle } from './link.style';

export interface LinkProps extends Omit<TouchableOpacityProps, 'style' | 'activeOpacity'> {
    label?: string;
    isDisabled?: boolean;
    children?: React.ReactNode
    color?: ColorName;
}

export const Link: React.FC<LinkProps> = (props): React.JSX.Element => {

    const styleColor = props.color ?? 'blue';

    return (
        <TouchableOpacity activeOpacity={0.7}>
            <Text
                style={[LinkStyle.link, LinkStyle[styleColor]]}>
                {props.label}
            </Text>
            {props.children}
        </TouchableOpacity>
    )
};