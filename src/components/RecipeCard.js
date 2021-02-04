import React from 'react';
import theme from '../utils/Theme';
import Box from './Box';
import {Image, TouchableHighlight} from 'react-native';
import images from '../res/images';
import Text from './Text';
import img from '../img/Mama.png';
import Heart from '../components/icons/Heart';
import Button from './Button';

const RecipeCard = () => {
  return (
    <Box flexDirection="column" width={151}>
      <Box flexDirection="row">
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
          Zafer Ayan
        </Text>
      </Box>
      <Button
        onPress={() => {
          console.log('abimin kulaklığı daha iyi ');
        }}>
        <Box mt="16px" position="relative">
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
            style={{width: 151, height: 151, borderRadius: 16}}
          />
        </Box>
      </Button>
      <Box>
        <Text
          fontSize="12px"
          fontWeight={700}
          color={theme.colors.mainText}
          mt="5px">
          10 dakikada portakal sulu irmikli baklava
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
