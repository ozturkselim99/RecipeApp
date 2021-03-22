import * as React from 'react';
import Box from '../../components/Box';
import Text from '../../components/Text';
import Button from '../../components/Button';
import CodeInput from '../../components/CodeInput';
import theme from '../../utils/Theme';
import CountDown from 'react-native-countdown-component';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Auth} from 'aws-amplify';

function VerificationScreen({route, navigation}) {
  const [code1, setCode1] = React.useState('');
  const [code2, setCode2] = React.useState('');
  const [code3, setCode3] = React.useState('');
  const [code4, setCode4] = React.useState('');
  const [code5, setCode5] = React.useState('');
  const [code6, setCode6] = React.useState('');

  const code1Ref = React.useRef(null);
  const code2Ref = React.useRef(null);
  const code3Ref = React.useRef(null);
  const code4Ref = React.useRef(null);
  const code5Ref = React.useRef(null);
  const code6Ref = React.useRef(null);

  const confirmHandle = async () => {
    const verificationCode = code1 + code2 + code3 + code4 + code5 + code6;
    try {
      await Auth.confirmSignUp(route.params?.email, verificationCode);
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
        <CodeInput
          inputRef={code1Ref}
          value={code1}
          onChangeText={(text) => {
            setCode1(text);
            if (text != '') {
              code2Ref.current && code2Ref.current.focus();
            }
          }}
        />
        <CodeInput
          inputRef={code2Ref}
          value={code2}
          onKeyPress={({nativeEvent}) => {
            if (nativeEvent.key === 'Backspace') {
              code1Ref.current && code1Ref.current.focus();
            }
          }}
          onChangeText={(text) => {
            setCode2(text);
            if (text != '') {
              code3Ref.current && code3Ref.current.focus();
            }
          }}
        />
        <CodeInput
          inputRef={code3Ref}
          value={code3}
          onKeyPress={({nativeEvent}) => {
            if (nativeEvent.key === 'Backspace') {
              code2Ref.current && code2Ref.current.focus();
            }
          }}
          onChangeText={(text) => {
            setCode3(text);
            if (text != '') {
              code4Ref.current && code4Ref.current.focus();
            }
          }}
        />
        <CodeInput
          inputRef={code4Ref}
          value={code4}
          onKeyPress={({nativeEvent}) => {
            if (nativeEvent.key === 'Backspace') {
              code3Ref.current && code3Ref.current.focus();
            }
          }}
          onChangeText={(text) => {
            setCode4(text);
            if (text != '') {
              code5Ref.current && code5Ref.current.focus();
            }
          }}
        />
        <CodeInput
          inputRef={code5Ref}
          value={code5}
          onKeyPress={({nativeEvent}) => {
            if (nativeEvent.key === 'Backspace') {
              code4Ref.current && code4Ref.current.focus();
            }
          }}
          onChangeText={(text) => {
            setCode5(text);
            if (text != '') {
              code6Ref.current && code6Ref.current.focus();
            }
          }}
        />
        <CodeInput
          inputRef={code6Ref}
          value={code6}
          onKeyPress={({nativeEvent}) => {
            if (nativeEvent.key === 'Backspace') {
              code5Ref.current && code5Ref.current.focus();
            }
          }}
          onChangeText={(text) => {
            setCode6(text);
          }}
        />
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
          onPress={confirmHandle}
          bg={theme.colors.mainGreen}
          width="100%"
          py={19}
          borderRadius={theme.radii.button}>
          <Text fontSize={15} fontWeight={700} color="white">
            Onayla
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
export default VerificationScreen;
