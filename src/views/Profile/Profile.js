import * as React from 'react';
import {Image, StatusBar} from 'react-native';
import Box from '../../components/Box';
import Text from '../../components/Text';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../utils/Theme';
import {MapPin, Settings} from '../../components/icons';

export default function ProfileScreen() {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
      headerBackTitle: '',
      headerTintColor: 'white',
      headerRight: () => (
        <Button mr={20} onPress={() => alert('This is a button!')}>
          <Settings stroke={'white'} />
        </Button>
      ),
    });
  }, [navigation]);

  return (
    <Box flex={1} bg={'white'}>
      <StatusBar barStyle={'light-content'} />

      <Box height={300}>
        <LinearGradient
          colors={[theme.colors.mainGreen, '#3fb37b']}
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingLeft: 10,
            paddingBottom: 10,
          }}>
          <Box
            mt={70}
            alignItems={'center'}
            justifyContent={'center'}
            flexDirection={'row'}>
            <Box alignItems={'center'}>
              <Text color={'white'} fontWeight={'bold'}>
                900
              </Text>
              <Text color={'white'}>Followers</Text>
            </Box>
            <Box alignItems={'center'}>
              <Image
                source={require('../../img/BlankAvatar2.png')}
                style={{
                  width: 90,
                  height: 90,
                  marginHorizontal: 30,
                  borderRadius: theme.radii.full,
                }}
              />
            </Box>
            <Box alignItems={'center'}>
              <Text color={'white'} fontWeight={'bold'}>
                1000
              </Text>
              <Text color={'white'}>Following</Text>
            </Box>
          </Box>
          <Box alignItems={'center'} mt={10}>
            <Text fontSize={23} fontWeight={'bold'} color={'white'}>
              Furkan Ergün
            </Text>
            <Text fontSize={12} color={'white'}>
              <MapPin stroke={'white'} height={15} />
              İstanbul, Türkiye
            </Text>
            <Button
              px={20}
              py={10}
              mt={20}
              borderRadius={7}
              borderColor={'white'}
              onPress={() => navigation.navigate('Auth', 'Login')}
              borderWidth={1}>
              <Text fontSize={12} fontWeight={'bold'} color={'white'}>
                Following
              </Text>
            </Button>
          </Box>
        </LinearGradient>
      </Box>
    </Box>
  );
}
