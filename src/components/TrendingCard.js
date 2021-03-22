import * as React from 'react';
import Box from './Box';
import Text from './Text';
import Button from './Button';
import theme from '../utils/Theme';
import {Image, ImageBackground} from 'react-native';
import {Clock, Star, Bookmark} from './icons';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

export default function TrendingCard(props) {
  const {image, title, time, rating, user} = props;
  const navigation = useNavigation();

  const handlePress = ({id}) => {
    navigation.navigate('RecipeDetail');
  };

  return (
    <Button onPress={handlePress}>
      <ImageBackground
        source={{uri: image}}
        resizeMode="cover"
        imageStyle={{borderRadius: theme.radii.input}}
        style={{
          height: 140,
          width: 270,
          marginRight: 10,
          overflow: 'hidden',
        }}>
        <LinearGradient
          colors={['transparent', 'black']}
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            paddingLeft: 15,
            paddingBottom: 10,
          }}>
          <Text color={'white'} fontWeight={'bold'} fontSize={17} mb={5}>
            {title}
          </Text>
          <Box flexDirection={'row'}>
            <Image
              source={{uri: user.avatar}}
              style={{
                width: 20,
                height: 20,
                borderRadius: theme.radii.full,
              }}
            />
            <Text color={'white'} fontSize={12} ml={5} mt={3}>
              {user.fullName}
            </Text>
          </Box>
          <Box flexDirection={'row'} mt={8}>
            <Box flexDirection={'row'}>
              <Star fill={'#f3a83b'} stroke={''} height={15} />
              <Text fontSize={13} color={'white'}>
                {rating}
              </Text>
            </Box>

            <Box flexDirection={'row'} ml={10}>
              <Clock stroke={'white'} height={15} />
              <Text fontSize={13} color={'white'}>
                {time}
              </Text>
            </Box>

            <Button position={'absolute'} right={7}>
              <Bookmark fill={'white'} stroke={''} />
            </Button>
          </Box>
        </LinearGradient>
      </ImageBackground>
    </Button>
  );
}
