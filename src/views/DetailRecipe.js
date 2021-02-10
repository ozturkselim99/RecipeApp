import * as React from 'react';
import Box from '../components/Box';
import {Platform, Dimensions} from 'react-native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import Text from '../components/Text';
import {Heart, CheckCircle} from '../components/icons';
import theme from '../utils/Theme';
import {Image} from 'react-native';
import images from '../res/images';
import img from '../img/photo.jpg';
import {SafeAreaView} from 'react-native-safe-area-context';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;

const renderContent = () => {
  return (
    <Box px="24px">
      <Box
        style={{
          height: 5,
          backgroundColor: 'gray',
          width: 40,
          borderRadius: 100,
        }}
        mt="16px"
        mx="auto"
      />
      <Box py="44px">
        <Text color={theme.colors.mainText} fontSize="17px" fontWeight="bold">
          Cacao Maca Walnut Milk
        </Text>
        <Text
          color={theme.colors.secondaryText}
          fontSize="15px"
          fontWeight={500}
          mt="8px">
          Food 60 mins
        </Text>
      </Box>
      <Box flexDirection="column">
        <Box flexDirection="row" alignItems="center">
          <Image
            source={images.zafer}
            style={{width: 31, height: 31, borderRadius: 11}}
          />
          <Text
            ml="8px"
            style={{textAlignVertical: 'center', textAlign: 'center'}}
            color={theme.colors.mainText}
            fontSize="15px"
            fontWeight="bold">
            Zafer Ayan
          </Text>
          <Box
            size="32px"
            ml="100px"
            borderRadius="32px"
            bg={theme.colors.mainGreen}
            justifyContent="center"
            alignItems="center">
            <Heart stroke="white" />
          </Box>
          <Box alignItems="center" justifyContent="center" ml="8px">
            <Text
              fontSize="15px"
              fontWeight="bold"
              color={theme.colors.mainText}>
              10000 likes
            </Text>
          </Box>
        </Box>
      </Box>
      <Box mt="34px">
        <Text fontSize="15px" fontWeight="bold" color={theme.colors.mainText}>
          Description
        </Text>
        <Text
          fontSize="15px"
          fontWeight={500}
          color={theme.colors.secondaryText}>
          Your recipe has been uploaded, you can see it on your profile. Your
          recipe has been uploaded, you can see it on your
        </Text>
      </Box>
      <Box mt="25px">
        <Text fontSize="15px" fontWeight="bold" color={theme.colors.mainText}>
          Ingredients
        </Text>
        <Box flexDirection="column" mt="12px">
          <Box flexDirection="row">
            <CheckCircle stroke={theme.colors.mainGreen} />
            <Text color={theme.colors.mainText} ml="8px">
              4 Eggs
            </Text>
          </Box>
        </Box>
        <Box flexDirection="column" mt="10px">
          <Box flexDirection="row">
            <CheckCircle stroke={theme.colors.mainGreen} />
            <Text color={theme.colors.mainText} ml="8px">
              1/2 Butter
            </Text>
          </Box>
        </Box>
        <Box flexDirection="column" mt="10px">
          <Box flexDirection="row">
            <CheckCircle stroke={theme.colors.mainGreen} />
            <Text color={theme.colors.mainText} ml="8px">
              4 Eggs
            </Text>
          </Box>
        </Box>
      </Box>
      <Box mt="25px">
        <Text fontSize="15px" fontWeight="bold" color={theme.colors.mainText}>
          Steps
        </Text>
        <Box flexDirection="column" mt="12px">
          <Box flexDirection="row">
            <Box
              borderRadius="12px"
              width={24}
              height={23}
              bg={theme.colors.mainText}
              alignItems="center"
              justifyContent="center">
              <Text color="white">1</Text>
            </Box>
            <Text
              color={theme.colors.mainText}
              ml="8px"
              fontSize="15px"
              pr="24px">
              Your recipe has been uploaded, you can see it on your profile.
              Your recipe has been uploaded, you can see it on your Your recipe
              has been uploaded, you can see it on your profile. Your recipe has
              been uploaded, you can see it on your Your recipe has been
              uploaded, you can see it on your profile. Your recipe has been
              uploaded, you can see it on your
            </Text>
          </Box>
        </Box>
        <Box alignItems="center" justifyContent="center" mt="14px">
          <Image
            source={img}
            style={{width: 280, height: 171, borderRadius: 12}}
          />
        </Box>
      </Box>
    </Box>
  );
};

function DetailRecipe() {
  return (
    <ReactNativeParallaxHeader
      statusBarColor={'transparent'}
      headerMinHeight={HEADER_HEIGHT}
      headerMaxHeight={400}
      extraScrollHeight={20}
      backgroundImage={require('../img/brokoli.jpeg')}
      backgroundImageScale={1.2}
      renderContent={renderContent}
      containerStyle={{flex: 1, background: 'white'}}
      contentContainerStyle={{flexGrow: 1, background: 'white'}}
      innerContainerStyle={{flex: 1, background: 'white'}}
      navbarColor={'transparent'}
    />
  );
}
export default DetailRecipe;
