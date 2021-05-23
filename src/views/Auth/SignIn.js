import * as React from 'react';
import {ImageBackground, SafeAreaView} from 'react-native';
import FormInput from '../../components/FormInput';
import Box from '../../components/Box';
import Text from '../../components/Text';
import Button from '../../components/Button';
import theme from '../../utils/Theme';
import {Mail, Lock, Eye, Google, Facebook, Apple} from '../../components/icons';
import {useNavigation} from '@react-navigation/native';
import {Modal, StatusBar} from 'react-native';

function MailIcon() {
  return <Mail stroke={theme.colors.mainText} />;
}

function LockIcon() {
  return <Lock stroke={theme.colors.mainText} />;
}

function EyeIcon() {
  return <Eye stroke={theme.colors.mainText} />;
}

export default function SignIn() {
  const [Email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');

  const [error, setError] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

  const navigation = useNavigation();


  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
      headerBackTitle: '',
      headerTintColor: 'white',
    });
  }, [navigation]);

  const signInHandler = async () => {

  };

  return (
    <Box
      as={ImageBackground}
      flex={1}
      resizeMode={'cover'}
      source={require('./403.png')}>
      <StatusBar barStyle={'light-content'} />

      <Box as={SafeAreaView} flex={1} justifyContent={'space-between'}>
        <Box alignItems="center" px="66px" mt={150} mb={'18px'}>
          <Text
            fontWeight={700}
            fontSize="22px"
            color={'white'}
            lineHeigt="32"
            textAlign={'center'}>
            Giriş Yap
          </Text>
        </Box>

        <Box alignItems="center" px="50px" mb="38px">
          <Text fontWeight={500} fontSize="15px" color={'white'} lineHeigt="27">
            Giriş yapmak için e-posta ve şifrenizi giriniz.
          </Text>
        </Box>

        <Box mb="16px" px="24px">
          <FormInput
            autoCapitalize={'none'}
            placeholderText="Mail veya telefon numarası"
            LeftIcon={MailIcon}
            keyboardType={'email-address'}
            onChangeText={setEmail}
            value={Email}
          />
        </Box>

        <Box px="24px">
          <FormInput
            placeholderText="Şifre giriniz"
            LeftIcon={LockIcon}
            RightIcon={EyeIcon}
            onChangeText={setPassword}
            value={Password}
            password
          />
        </Box>

        <Box alignItems="flex-start" px="24px" mt="24px">
          <Button
            my={15}
            onPress={() => navigation.navigate('PasswordRecovery')}>
            <Text fontWeight={500} color={'white'}>
              Şifremi Unuttum
            </Text>
          </Button>
        </Box>

        <Box px={24} mt="12px">
          {error && (
            <Box
              mb="60px"
              py="10px"
              px="30px"
              bg={'white'}
              alignItems="center"
              borderRadius={theme.radii.button}>
              <Text
                fontSize={15}
                fontWeight={700}
                color={theme.colors.googleButtonColor}>
                Girdiğiniz kullanıcı bilgileriniz bir hesaba ait değil. Lütfen
                kullanıcı adınızı ve şifrenizi kontrol edip tekrar deneyiniz.
              </Text>
            </Box>
          )}
          <Button
            bg={theme.colors.mainGreen}
            width="100%"
            py={19}
            onPress={signInHandler}
            borderRadius={theme.radii.button}>
            <Text fontSize={15} fontWeight={700} color="white">
              Giriş Yap
            </Text>
          </Button>
        </Box>

        <Box my={50} alignItems="center">
          <Button>
            <Text color={theme.colors.secondaryText} fontSize="15px">
              veya devam edin
            </Text>
          </Button>
        </Box>

        <Box px={24} flexDirection={'row'} justifyContent={'center'} mb={80}>
          {/*Google Button*/}
          <Button
            onPress={() => navigation.navigate('ResetPassword')}
            bg={'white'}
            borderRadius={theme.radii.full}
            p={15}>
            <Google />
          </Button>

          {/*Facebook Button*/}
          <Button
            onPress={() => navigation.navigate('ResetPassword')}
            bg={'#3b5998'}
            justifyContent={'center'}
            alignItems={'center'}
            borderRadius={theme.radii.full}
            p={15}
            ml={20}>
            <Facebook fill={'white'} />
          </Button>

          {/*Apple Button*/}
          <Button
            onPress={() => navigation.navigate('ResetPassword')}
            bg={'white'}
            justifyContent={'center'}
            alignItems={'center'}
            borderRadius={theme.radii.full}
            p={15}
            ml={20}>
            <Apple fill={'black'} />
          </Button>
        </Box>

        <Box flexDirection="row" justifyContent="center" mb={30}>
          <Button onPress={() => navigation.navigate('PasswordVerification')}>
            <Text color={'white'} fontSize="15px" fontWeight={500} mr="15px">
              Hesabınız yok mu?
            </Text>
          </Button>
          <Button onPress={() => navigation.navigate('Register')}>
            <Text
              fontWeight={700}
              fontSize="15px"
              color={theme.colors.mainGreen}>
              Kayıt ol
            </Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
