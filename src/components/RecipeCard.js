import React from 'react';
import theme from '../utils/Theme';
import Box from './Box';
import {Image} from 'react-native';
import images from '../res/images';
import Text from './Text';
import img from '../img/Mama.png';
import Heart from './icons/Heart';
import {Dimensions} from 'react-native';
import Button from './Button';

const width = Dimensions.get('window').width;

const RecipeCard = ({onPress, author, title}) => {
  return (
    <Box flexDirection="column" width={width * 0.41}>
      <Box flexDirection="row" alignItems={'center'}>
        <Image
          source={images.zafer}
          style={{width: 31, height: 31, borderRadius: 11}}
        />
        <Text
          style={{textAlignVertical: 'center', textAlign: 'center'}}
          fontSize="12px"
          fontWeight={500}
          color={theme.colors.mainText}
          ml="10px"
          textAlign="justify">
          {author}
        </Text>
      </Box>
      <Button onPress={onPress} mt={12}>
        <Box
          position="absolute"
          top={16}
          size="32px"
          zIndex={10}
          right={16}
          borderRadius="8px"
          bg="rgba(255, 255, 255, 0.2)"
          justifyContent="center"
          alignItems="center">
          <Heart stroke="white" />
        </Box>
        <Image
          source={img}
          resizeMode="cover"
          style={{
            borderRadius: 16,
            flex: 1,
            position: 'relative',
            height: width * 0.41,
          }}
        />
      </Button>
      <Box mt={15}>
        <Text fontSize="12px" fontWeight={700} color={theme.colors.mainText}>
          {title}
        </Text>
        <Text
          fontSize="12px"
          fontWeight={700}
          color={theme.colors.secondaryText}
          mt="5px">
          Food >60 mins
        </Text>
      </Box>
    </Box>
  );
};

export default RecipeCard;
