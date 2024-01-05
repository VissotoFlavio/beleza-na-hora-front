import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export interface TabViewScheduleProps {
  value: string;
}

export const TabViewSchedule = (props: TabViewScheduleProps): JSX.Element => {
  const [initial, setInitial] = useState(props.value);

  useEffect(() => {
    setTimeout(() => {
      setInitial('novo valor atualizado pela view TabViewSchedule');
    }, 3000);
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{initial}</Text>
    </View>
  );
};
