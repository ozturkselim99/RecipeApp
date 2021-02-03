import Box from '../components/Box';
import * as React from 'react';
import {Image} from 'react-native';
import Text from '../components/Text';
import theme from '../utils/Theme';
import Button from '../components/Button';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function WelcomeScreen({navigation}) {
  return (
    <Box as={SafeAreaView} flex={1} bg={'white'}>
      <Box>
        <Image
          source={require('../img/opening.jpg')}
          style={{width: '100%', height: 420}}
        />
      </Box>
      <Box px={20} mt={48}>
        <Text
          fontWeight={700}
          fontSize={22}
          color={theme.colors.mainText}
          lineHeigt="32"
          textAlign={'center'}>
          Hoşgeldiniz
        </Text>
      </Box>
      <Box alignItems="center" px={66} mt={16}>
        <Text
          fontWeight={500}
          fontSize={17}
          color={theme.colors.secondaryText}
          lineHeigt="27"
          textAlign={'center'}>
          Daha iyi yemek pişirmek için topluluğumuza katılın!
        </Text>
      </Box>
      <Box px={24} mt={72}>
        <Button
          bg={theme.colors.mainGreen}
          width="100%"
          py={19}
          onPress={() => navigation.navigate('Login')}
          borderRadius={theme.radii.button}>
          <Text fontSize={15} fontWeight={700} color="white">
            Başla
          </Text>
        </Button>
      </Box>
    </Box>
  );
}
