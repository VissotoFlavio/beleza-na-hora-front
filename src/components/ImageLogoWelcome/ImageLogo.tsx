import React from 'react';
import { Image, ImageProps, View } from 'react-native';
import { ImageLogoStyles } from './style';

export interface ImageLogoProps extends Omit<ImageProps, 'source'> {
  showBackground?: boolean;
}

const ImageLogo: React.FC<ImageLogoProps> = (props): React.JSX.Element => {
  const height = props.height ?? 35;
  const width = props.width ?? 55;

  const getImage = (): React.JSX.Element => {
    return (
      <Image
        height={height}
        width={width}
        alt="logo"
        style={[props.style ?? props.style]}
        source={require('../../../assets/images/welcome.png')}
        {...props}
      />
    );
  };

  return (
    <View style={ImageLogoStyles.container}>
      {props.showBackground ? (
        <View
          // className="bg-sky-400/50 rounded-full items-center justify-center"
          style={ImageLogoStyles.circle1}>
          <View
            // className="bg-sky-400/50 rounded-full items-center justify-center"
            style={ImageLogoStyles.circle2}>
            {getImage()}
          </View>
        </View>
      ) : (
        getImage()
      )}
    </View>
  );
};

export default ImageLogo;
