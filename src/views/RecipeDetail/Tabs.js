import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import theme from '../../utils/Theme';

import Tab from './Tab';

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
  },
});

export default ({tabs, active, onMeasurement, onPress}) => (
  <View style={styles.overlay}>
    {tabs.map((tab, index) => (
      <Tab
        key={index}
        onMeasurement={
          onMeasurement ? onMeasurement.bind(null, index) : undefined
        }
        color={active ? 'white' : theme.colors.mainText}
        onPress={onPress ? onPress.bind(null, index) : undefined}
        {...tab}
      />
    ))}
  </View>
);
