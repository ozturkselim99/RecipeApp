import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {
  useValue,
  withTimingTransition,
} from 'react-native-redash/lib/module/v1';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {HEADER_IMAGE_HEIGHT} from './HeaderImage';
import TabHeader from './TabHeader';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {ChevronLeft, Share} from '../../components/icons';
import theme from '../../utils/Theme';

const ICON_SIZE = 24;
const PADDING = 16;
export const MIN_HEADER_HEIGHT = 45;
const {interpolate, Extrapolate, useCode, greaterThan, set, block} = Animated;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  header: {
    flexDirection: 'row',
    height: MIN_HEADER_HEIGHT,
    alignItems: 'center',
    paddingHorizontal: PADDING,
  },
  title: {
    marginLeft: PADDING,
    flex: 1,
  },
});

export default ({y, tabs, scrollView}) => {
  const toggle = useValue(0);
  const insets = useSafeAreaInsets();
  const {goBack} = useNavigation();
  const transition = withTimingTransition(toggle, {duration: 100});
  const {top: paddingTop} = insets;
  const translateX = interpolate(y, {
    inputRange: [0, HEADER_IMAGE_HEIGHT],
    outputRange: [-ICON_SIZE - PADDING, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const translateFont = interpolate(y, {
    inputRange: [-100, 0, HEADER_IMAGE_HEIGHT],
    outputRange: [40, 30, 20],
    extrapolateRight: Extrapolate.CLAMP,
  });

  const translateY = interpolate(y, {
    inputRange: [-100, 0, HEADER_IMAGE_HEIGHT],
    outputRange: [
      HEADER_IMAGE_HEIGHT - MIN_HEADER_HEIGHT + 100,
      HEADER_IMAGE_HEIGHT - paddingTop - 90,
      0,
    ],
    extrapolateRight: Extrapolate.CLAMP,
  });
  const opacity = transition;
  useCode(() => block([set(toggle, greaterThan(y, HEADER_IMAGE_HEIGHT))]), [
    toggle,
    y,
  ]);
  return (
    <Animated.View style={[styles.container, {paddingTop}]}>
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity,
          backgroundColor: 'white',
        }}
      />
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => goBack()}>
          <View>
            <ChevronLeft size={ICON_SIZE} color="white" />
            <Animated.View
              style={{...StyleSheet.absoluteFillObject, opacity: transition}}>
              <ChevronLeft size={ICON_SIZE} color="black" />
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
        <Animated.Text
          style={[
            styles.title,
            {
              transform: [{translateX}, {translateY}],
              color: theme.colors.mainGreen,
              fontSize: translateFont,
              fontWeight: 'bold',
            },
          ]}>
          Kayseri Mantısı
        </Animated.Text>
        <Share name="heart" size={ICON_SIZE} color="white" />
      </View>
      <TabHeader {...{y, transition, tabs, scrollView}} />
    </Animated.View>
  );
};
