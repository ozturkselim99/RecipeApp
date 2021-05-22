import * as React from 'react';
import Box from './Box';
import Text from './Text';
import Button from './Button';
import theme from '../utils/Theme';
import {ImageBackground} from 'react-native';
import {Clock, Star, Bookmark} from './icons';
import LinearGradient from 'react-native-linear-gradient';

export default function RecipeCard(props) {
  const {image, title, time, rating} = props;
  return (
    <Button>
      <ImageBackground
        source={{uri: image}}
        resizeMode="cover"
        imageStyle={{borderRadius: theme.radii.input}}
        style={{
          height: 160,
          width: 180,
          marginRight: 10,
          overflow: 'hidden',
        }}>
        <LinearGradient
          colors={['transparent', 'black']}
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            paddingLeft: 10,
            paddingBottom: 10,
          }}>
          <Text color={'white'} fontWeight={'bold'} fontSize={17}>
            {title}
          </Text>

          <Box flexDirection={'row'} mt={8}>
            <Box>
              <Box flexDirection={'row'}>
                <Star fill={'#f3a83b'} stroke={''} height={15} />
                <Text fontSize={13} color={'white'}>
                  {rating}
                </Text>
              </Box>

              <Box flexDirection={'row'} mt={5}>
                <Clock stroke={'white'} height={15} />
                <Text fontSize={13} color={'white'}>
                  {time}
                </Text>
              </Box>
            </Box>

            <Button position={'absolute'} bottom={0} right={7}>
              <Bookmark fill={'white'} stroke={''} />
            </Button>
          </Box>
        </LinearGradient>
      </ImageBackground>
    </Button>
  );
}
