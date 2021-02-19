import * as React from 'react';
import FormInput from '../components/FormInput';
import Box from '../components/Box';
import Text from '../components/Text';
import Button from '../components/Button';
import theme from '../utils/Theme';
import {Mail, Lock, Eye, Google} from '../components/icons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Auth} from 'aws-amplify';
import AuthContext from '../context/AuthContext';
import {useNavigation} from '@react-navigation/native';

function MailIcon() {
  return <Mail stroke={theme.colors.mainText} />;
}

function LockIcon() {
  return <Lock stroke={theme.colors.mainText} />;
}

function EyeIcon() {
  return <Eye stroke={theme.colors.mainText} />;
}

function LoginScreen() {
  const [Email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');

  const navigation = useNavigation();

  const {setLogged} = React.useContext(AuthContext);

  const signInHandler = async () => {
    await Auth.signIn(Email, Password)
      .then(() => {
        setLogged(true);
        navigation.navigate('Home');
      })
      .catch((error) => console.log(error));
  };

  return (
    <Box as={SafeAreaView} justifyContent="center" bg={'white'} flex={1}>
      <Box alignItems="center" px="66px" mb={'18px'}>
        <Text
          fontWeight={700}
          fontSize="22px"
          color={theme.colors.mainText}
          lineHeigt="32"
          textAlign={'center'}>
          Hoş Geldiniz
        </Text>
      </Box>
      <Box alignItems="center" px="66px" mb="38px">
        <Text
          fontWeight={500}
          fontSize="15px"
          color={theme.colors.secondaryText}
          lineHeigt="27">
          Lütfen hesap bilgilerinizi buraya giriniz!
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
      <Box alignItems="flex-end" px="24px" mt="24px">
        <Button onPress={() => navigation.navigate('PasswordRecovery')}>
          <Text color={theme.colors.mainText}>Şifremi Unuttum </Text>
        </Button>
      </Box>
      <Box px={24} mt="72px">
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
      <Box my="24px" alignItems="center">
        <Button>
          <Text color={theme.colors.secondaryText} fontSize="15px">
            veya devam edin
          </Text>
        </Button>
      </Box>
      <Box px={24}>
        <Button
          onPress={() => navigation.navigate('ResetPassword')}
          bg={theme.colors.googleButtonColor}
          width="100%"
          py={19}
          borderRadius={theme.radii.button}>
          <Box flexDirection="row">
            <Google fill="white" />
            <Text fontSize={15} fontWeight={700} color="white" ml="4px">
              Google
            </Text>
          </Box>
        </Button>
      </Box>
      <Box flexDirection="row" justifyContent="center" mt="24px">
        <Button onPress={() => navigation.navigate('PasswordVerification')}>
          <Text
            color={theme.colors.mainText}
            fontSize="15px"
            fontWeight={500}
            mr="15px">
            Hesabınız yok mu?
          </Text>
        </Button>
        <Button onPress={() => navigation.navigate('Register')}>
          <Text fontWeight={700} fontSize="15px" color={theme.colors.mainGreen}>
            Kayıt ol
          </Text>
        </Button>
      </Box>
    </Box>
  );
}
export default LoginScreen;
