import * as React from 'react';
import FormInput from '../components/FormInput';
import Box from '../components/Box';
import Text from '../components/Text';
import Button from '../components/Button';
import theme from '../utils/Theme';
import {Mail} from '../components/icons';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function MailIcon() {
  return <Mail stroke={theme.colors.mainText} />;
}

function PasswordRecoveryScreen({navigation}) {
  return (
    <Box
      as={SafeAreaView}
      bg={'white'}
      flexDirection="column"
      justifyContent="center"
      flex={1}>
      <ScrollView style={{flex: 1}}>
        <Box alignItems="center" px="66px" mb={'18px'} paddingTop={'107px'}>
          <Text
            fontWeight={700}
            fontSize="22px"
            color={theme.colors.mainText}
            lineHeigt="32"
            textAlign={'center'}>
            Şifre Kurtarma
          </Text>
        </Box>
        <Box alignItems="center" px="24px" mb="38px">
          <Text
            fontWeight={500}
            fontSize="15px"
            color={theme.colors.secondaryText}
            lineHeigt="27">
            Şifrenizi kurtarmak için e-postanızı giriniz
          </Text>
        </Box>
        <Box mb="16px" px="24px">
          <FormInput
            placeholderText="Mail veya telefon numarası"
            LeftIcon={MailIcon}
          />
        </Box>
        <Box px={24} mt="32px">
          <Button
            bg={theme.colors.mainGreen}
            width="100%"
            py={19}
            borderRadius={theme.radii.button}>
            <Text fontSize={15} fontWeight={700} color="white">
              Oturum Aç
            </Text>
          </Button>
        </Box>
      </ScrollView>
    </Box>
  );
}
export default PasswordRecoveryScreen;
