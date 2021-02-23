import * as React from 'react';
import Box from '../components/Box';
import Text from '../components/Text';
import Button from '../components/Button';
import CodeInput from '../components/CodeInput';
import theme from '../utils/Theme';
import CountDown from 'react-native-countdown-component';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Auth} from 'aws-amplify';

function PasswordVerificationScreen({route, navigation}) {
  const [codes, setCodes] = React.useState([]);

  const inputRefs = [
    React.useRef(),
    React.useRef(),
    React.useRef(),
    React.useRef(),
    React.useRef(),
    React.useRef(),
  ];

  const goNextAfterEdit = (index) => {
    if (index < 5) {
      inputRefs[index + 1].focus();
    }
  };

  const goPrevBackspace = (index) => {
    if (index !== 0) {
      inputRefs[index - 1].focus();
    }
  };

  const confirmHandle = async () => {
    const verificationCode = codes.join('');
    try {
      await Auth.forgotPasswordSubmit(route.params?.email, verificationCode);
      navigation.navigate('Login');
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  };

  return (
    <Box
      as={SafeAreaView}
      bg={'white'}
      flexDirection="column"
      justifyContent="center"
      flex={1}>
      <Box alignItems="center" px="66px" mb="8px">
        <Text
          fontWeight={700}
          fontSize="22px"
          color={theme.colors.mainText}
          lineHeigt="32"
          textAlign={'center'}>
          E-Postanı Kontrol Et
        </Text>
      </Box>
      <Box alignItems="center" px="66px" mb="32px">
        <Text
          fontWeight={500}
          fontSize="15px"
          color={theme.colors.secondaryText}
          lineHeigt="27">
          Kodu e-postanıza gönderdik
        </Text>
      </Box>
      <Box flexDirection="row" justifyContent="space-between" px="24px">
        {inputRefs.map((k, index) => (
          <CodeInput
            inputRef={(r) => (inputRefs[index] = r)}
            value={codes[index]}
            onKeyPress={({nativeEvent}) => {
              if (nativeEvent.key === 'Backspace') {
                goPrevBackspace(index);
              }
            }}
            onChangeText={(text) => {
              let newArray = [...codes];
              newArray[index] = text;
              setCodes(newArray);
              if (text !== '') {
                goNextAfterEdit(index);
              }
            }}
          />
        ))}
      </Box>
      <Box
        alignItems="center"
        flexDirection="row"
        justifyContent="center"
        px="66px"
        mt="48px">
        <Text
          fontWeight={500}
          fontSize="15px"
          color={theme.colors.mainText}
          lineHeigt="27">
          kodun süresi:{' '}
        </Text>
        <CountDown
          until={60 * 5 + 30}
          size={15}
          onFinish={() => alert('Finished')}
          digitStyle={{backgroundColor: 'transparent'}}
          digitTxtStyle={{color: theme.colors.googleButtonColor}}
          timeToShow={['M', 'S']}
          timeLabels={{m: null, s: null}}
          showSeparator
        />
      </Box>
      <Box px={24} mt="24px">
        <Button
          bg={theme.colors.mainGreen}
          width="100%"
          py={19}
          onPress={confirmHandle}
          borderRadius={theme.radii.button}>
          <Text fontSize={15} fontWeight={700} color="white">
            İleri
          </Text>
        </Button>
      </Box>
      <Box px={24} mt="16px">
        <Button
          width="100%"
          py={19}
          borderRadius={theme.radii.button}
          borderColor={theme.colors.secondaryText}
          borderWidth="1px">
          <Text
            fontSize={15}
            fontWeight={700}
            color={theme.colors.secondaryText}>
            Tekrar gönder
          </Text>
        </Button>
      </Box>
    </Box>
  );
}
export default PasswordVerificationScreen;
