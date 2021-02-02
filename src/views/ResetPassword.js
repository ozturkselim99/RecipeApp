import * as React from 'react';
import FormInput from '../components/FormInput';
import Box from '../components/Box';
import Text from '../components/Text';
import Button from '../components/Button';
import theme from '../utils/Theme';
import {Mail, Lock, Eye, CheckCircle} from '../components/icons';

function MailIcon() {
  return <Mail stroke={theme.colors.mainText} />;
}

function LockIcon() {
  return <Lock stroke={theme.colors.mainText} />;
}

function ResetPasswordScreen({navigation}) {
  const [Email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [PasswordValid, setPasswordValid] = React.useState(null);

  function EyeIcon() {
    return <Eye stroke={theme.colors.mainText} />;
  }

  return (
    <Box flexDirection="column" justifyContent="center" flex={1}>
      {/*<Box px="66px" mb={'18px'}>*/}
      <Text
        fontWeight={700}
        fontSize="22px"
        color={theme.colors.mainText}
        lineHeigt="32"
        textAlign={'center'}>
        Şifrenizi sıfırlayın
      </Text>
      <Box alignItems="center" px="66px" mb="24px" mt="8px">
        <Text
          fontWeight={500}
          fontSize="15px"
          color={theme.colors.secondaryText}
          lineHeigt="27">
          Lütfen yeni şifrenizi girin
        </Text>
      </Box>
      <Box>
        <FormInput
          placeholderText="Şifre giriniz"
          LeftIcon={LockIcon}
          RightIcon={EyeIcon}
          value={Password}
          password
          onChangeText={setPassword}
          pattern={[
            '^.{6,}$', // min 6 chars
            '(?=.*\\d)', // number required
            /*'(?=.*[A-Z])', // uppercase letter*/
          ]}
          setIsValid={setPasswordValid}
        />
      </Box>
      <Box px="30px" py="24px" flexDirection="column">
        <Box flexDirection="row">
          <Text fontSize="17px" fontWeight={500} color={theme.colors.mainText}>
            Şifreniz şunları içermelidir
          </Text>
        </Box>
        <Box flexDirection="row" mt="16px">
          <CheckCircle
            stroke={
              PasswordValid && PasswordValid[0]
                ? theme.colors.mainGreen
                : theme.colors.secondaryText
            }
          />
          <Text
            fontSize="15px"
            fontWeight={500}
            color={
              PasswordValid && PasswordValid[0]
                ? theme.colors.mainText
                : theme.colors.secondaryText
            }
            lineHeigt="25px"
            ml="8px">
            En az 6 karakter içermelidir!
          </Text>
        </Box>
        <Box flexDirection="row" mt="16px">
          <CheckCircle
            stroke={
              PasswordValid && PasswordValid[1]
                ? theme.colors.mainGreen
                : theme.colors.secondaryText
            }
          />
          <Text
            fontSize="15px"
            fontWeight={500}
            color={
              PasswordValid && PasswordValid[1]
                ? theme.colors.mainText
                : theme.colors.secondaryText
            }
            lineHeigt="25px"
            ml="8px">
            En az 1 rakam olmalıdır!
          </Text>
        </Box>
      </Box>
      <Box px="24px" mt="23px">
        <Button
          onPress={() => navigation.navigate('Login')}
          bg={theme.colors.mainGreen}
          width="100%"
          py={19}
          borderRadius={theme.radii.button}>
          <Text fontSize={15} fontWeight={700} color="white">
            Bitti
          </Text>
        </Button>
      </Box>
    </Box>
  );
}
export default ResetPasswordScreen;
