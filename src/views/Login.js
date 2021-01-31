import * as React from 'react';
import FormInput from '../components/FormInput';
import Box from '../components/Box';
import Text from '../components/Text';
import Button from '../components/Button';
import theme from '../utils/Theme';
import {Mail, Lock, Eye, Google} from '../components/icons';
import {ScrollView} from 'react-native';

function MailIcon() {
  return <Mail stroke={theme.colors.mainText} />;
}

function LockIcon() {
  return <Lock stroke={theme.colors.mainText} />;
}

function EyeIcon() {
  return <Eye stroke={theme.colors.mainText} />;
}

function LoginScreen({navigation}) {
  return (
    <Box flexDirection="column" justifyContent="center" flex={1}>
      <ScrollView style={{flex: 1}}>
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
        <Box mb="16px">
          <FormInput
            placeholderText="Mail veya telefon numarası"
            LeftIcon={MailIcon}
          />
        </Box>
        <Box>
          <FormInput
            placeholderText="Şifre giriniz"
            LeftIcon={LockIcon}
            RightIcon={EyeIcon}
          />
        </Box>
        <Box alignItems="flex-end" px="24px" mt="24px">
          <Button>
            <Text color={theme.colors.mainText}>Şifremi Unuttum </Text>
          </Button>
        </Box>
        <Box px={24} mt="72px">
          <Button
            bg={theme.colors.mainGreen}
            width="100%"
            py={19}
            borderRadius={theme.radii.button}>
            <Text fontSize={15} fontWeight={700} color="white">
              Giriş Yap
            </Text>
          </Button>
        </Box>
        <Box my="24px" alignItems="center">
          <Text color={theme.colors.secondaryText} fontSize="15px">
            veya devam edin
          </Text>
        </Box>
        <Box px={24}>
          <Button
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
          <Text
            color={theme.colors.mainText}
            fontSize="15px"
            fontWeight={500}
            mr="15px">
            Hesabınız yok mu?
          </Text>
          <Button onPress={() => navigation.navigate('Register')}>
            <Text
              fontWeight={700}
              fontSize="15px"
              color={theme.colors.mainGreen}>
              Kayıt ol
            </Text>
          </Button>
        </Box>
      </ScrollView>
    </Box>
  );
}
export default LoginScreen;
