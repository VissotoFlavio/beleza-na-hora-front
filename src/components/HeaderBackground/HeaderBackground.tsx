import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { StyleColorValues } from '../../theme';
import BackgroundSvg from './../../../assets/images/wave.svg';

export interface HeaderBackgroundProps {
  height?: number;
}

const HeaderBackground: React.FC<HeaderBackgroundProps> = (props): React.JSX.Element => {
  const [heightWave] = useState(props.height ?? 120);

  return (
    <View className="absolute" style={styles.svgCurve}>
      <View className="bg-pink-300" style={{ height: heightWave + 17 }}>
        <BackgroundSvg
          fill={StyleColorValues.pink[300]}
          height={heightWave}
          width="100%"
          style={{ position: 'absolute', top: heightWave }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // rest of the styles
  svgCurve: {
    position: 'absolute',
    width: wp(100),
  },
});

export default HeaderBackground;
