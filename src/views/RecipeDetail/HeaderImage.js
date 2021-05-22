import React from 'react';
import {Dimensions, StyleSheet, ImageBackground} from 'react-native';
import Animated from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import Box from '../../components/Box';
import {Bookmark, Clock, Star} from '../../components/icons';
import Text from '../../components/Text';

const {Extrapolate, interpolate} = Animated;
const {height: wHeight, width: wWidth} = Dimensions.get('window');

const ICON_SIZE = 24;

export const backgroundImage =
  'https://i.sozcu.com.tr/wp-content/uploads//2018/03/iecrop/mantikapaksozcu_16_9_1520590693.jpg';

export const HEADER_IMAGE_HEIGHT = wHeight / 2.5;
const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: wWidth,
    resizeMode: 'cover',
  },
});

export default ({y}) => {
  const height = interpolate(y, {
    inputRange: [-100, 0],
    outputRange: [HEADER_IMAGE_HEIGHT + 100, HEADER_IMAGE_HEIGHT],
    extrapolateRight: Extrapolate.CLAMP,
  });
  const top = interpolate(y, {
    inputRange: [0, 100],
    outputRange: [0, -100],
    extrapolateLeft: Extrapolate.CLAMP,
  });

  return (
    <Animated.View style={[{top, height}]}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: backgroundImage,
        }}>
        <LinearGradient
          colors={['transparent', 'black']}
          style={{
            justifyContent: 'flex-end',
            paddingLeft: 15,
            paddingBottom: 10,
            height: HEADER_IMAGE_HEIGHT,
          }}>
          <Box flexDirection={'column'}>
            <Box mb={55}>
              <Text fontSize={14} color={'white'}>
                Breakfast
              </Text>
            </Box>
            <Box flexDirection={'row'} alignItems={'center'}>
              <Box flexDirection={'row'}>
                <Star fill={'#f3a83b'} stroke={''} height={15} />
                <Text fontSize={13} color={'white'}>
                  4/5 (349 Ratings)
                </Text>
              </Box>

              <Box flexDirection={'row'} ml={10} flex={1}>
                <Clock stroke={'white'} height={15} />
                <Text fontSize={13} color={'white'}>
                  30 Dakika
                </Text>
              </Box>
              <Box mr={10}>
                <Text fontSize={13} color={'white'}>
                  347
                </Text>
                <Bookmark stroke={'white'} height={ICON_SIZE} />
              </Box>
            </Box>
          </Box>
        </LinearGradient>
      </ImageBackground>
    </Animated.View>
  );
};
