import React from 'react';
import Box from '../components/Box';
import Text from '../components/Text';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image} from 'react-native';
import theme from '../utils/Theme';
import Button from '../components/Button';

export default function MustLogin() {
  const navigation = useNavigation();
  return (
    <Box
      as={SafeAreaView}
      flex={1}
      justifyContent={'center'}
      px={24}
      bg={'white'}>
      <Box alignItems={'center'}>
        <Image
          style={{height: 150}}
          source={require('../img/recipe.png')}
          resizeMode={'contain'}
        />
      </Box>
      <Text
        mt={20}
        textAlign={'center'}
        fontWeight={700}
        fontSize={20}
        color={theme.colors.mainText}>
        Keşfet!
      </Text>
      <Text
        mt={10}
        textAlign={'center'}
        fontWeight={500}
        color={theme.colors.secondaryText}>
        Uygulamamızı daha faydalı kullanabilmek için lütfen giriş yapın.
        Profilinizi, beğenilerinizi ve özel listelerinizi hesabımdan takip
        edebilirsiniz.
      </Text>
      <Box>
        <Button
          mt={50}
          py={15}
          borderRadius={theme.radii.button}
          onPress={() => navigation.navigate('Auth')}
          bg={theme.colors.mainGreen}>
          <Text color={'white'} fontWeight={500}>
            Giriş Yap
          </Text>
        </Button>
      </Box>
    </Box>
  );
}
