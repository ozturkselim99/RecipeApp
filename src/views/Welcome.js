import * as React from 'react';
import {StyleSheet, StatusBar, SafeAreaView, Image, Alert} from 'react-native';
import Video from 'react-native-video';
import Box from '../components/Box';
import Text from '../components/Text';
import Button from '../components/Button';
import theme from '../utils/Theme';
import {useNavigation} from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  const onBuffer = (data) => {
    console.log('on buffering ===>>> ', data);
  };

  const videoError = (data) => {
    console.log('video error ===>>> ', data);
  };

  const skipHandler = () => {
    Alert.alert(
      'Uyarı !',
      'Uygulamaya kayıt olmazsan tüm özelliklerinden faydalanamazsın.',
      [
        {
          text: 'İptal',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Tamam', onPress: () => navigation.navigate('Main', 'Home')},
      ],
    );
  };

  return (
    <Box flex={1}>
      <StatusBar animated={true} barStyle={'light-content'} />
      <Video
        source={require('./video.mp4')}
        onBuffer={onBuffer}
        onError={videoError}
        resizeMode={'cover'}
        repeat={true}
        style={styles.backgroundVideo}
      />

      <Box
        as={SafeAreaView}
        flex={1}
        justifyContent={'space-between'}
        alignItems={'center'}
        mx={30}>
        <Box width={'100%'} mt={20} alignItems={'flex-end'}>
          <Button onPress={skipHandler}>
            <Text color={'white'} fontWeight={'bold'}>
              Skip
            </Text>
          </Button>
        </Box>
        <Image
          style={{
            marginTop: 10,
            height: 120,
            width: '100%',
            resizeMode: 'contain',
          }}
          source={require('../img/logo.png')}
        />

        <Text
          color={'white'}
          fontSize={40}
          mx={15}
          fontWeight={'bold'}
          textAlign={'center'}>
          Organized Grocery List
        </Text>

        <Text color={'white'} fontSize={20} textAlign={'center'} mt={-30}>
          Add recipes to your shopping list and never forget a recipe item again
        </Text>

        <Box
          flexDirection={'row'}
          justifyContent={'space-between'}
          mt={100}
          width={'100%'}>
          <Button bg={theme.colors.mainGreen} px={40} py={15} borderRadius={7}>
            <Text fontSize={15} color={'white'} fontWeight={'bold'}>
              Sign Up
            </Text>
          </Button>

          <Button
            px={40}
            py={15}
            borderRadius={7}
            borderColor={'white'}
            onPress={() => navigation.navigate('Auth', 'Login')}
            borderWidth={1}>
            <Text fontSize={15} fontWeight={'bold'} color={'white'}>
              Sign In
            </Text>
          </Button>
        </Box>

        <Box flexDirection={'row'} mb={20}>
          <Text color={'gray'} fontSize={14} textAlign={'center'}>
            By joining you agree to our{' '}
            <Text color={'white'}>Terms of Service </Text>and{' '}
            <Text color={'white'}>Privacy Policy</Text>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundVideo: {
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
