import * as React from 'react';
import FormInput from '../components/FormInput';
import Box from '../components/Box';
import Text from '../components/Text';
import Input from '../components/Input'
import Button from '../components/Button';
import theme from '../utils/Theme';
import { Mail, Lock, Eye, CheckCircle, User } from '../components/icons';
import { ChevronLeft, Settings, ChefHat, Playlist } from '../components/icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Auth } from 'aws-amplify';
import BlankAvatar from '../img/BlankAvatar2.png';
import { Image, TextInput, View } from 'react-native';
import selo from '../img/selo.jpg';


function EditPasswordScreen({ navigation }) {

    return (
        <Box
            as={SafeAreaView}
            bg={'white'}
            flexDirection="column"
            flex={1}
            px='24px'
            py='24px'
        >
            <Box alignItems="center" mb="12px">
                <Text
                    fontWeight={700}
                    fontSize="22px"
                    color={theme.colors.mainText}
                    lineHeigt="32"
                    textAlign={'center'}>
                    Şifre Düzenle
                 </Text>
            </Box>

            <Box  borderBottomWidth="0.5px">
                <TextInput placeholder="Mevcut Şifre">

                </TextInput>
            </Box>

            <Box borderBottomWidth="0.5px">
                <TextInput placeholder="Yeni Şifre">

                </TextInput>
            </Box>

            <Box borderBottomWidth="0.5px">
                <TextInput passwordRules="true" placeholder="Yeni Şifre Tekrar">

                </TextInput>
            </Box>

            <Button mt="24px"
                onPress={() => { }}>
                <Text fontWeight={700} fontSize="17px" color={theme.colors.mainText}>
                    Kaydet
          </Text>
            </Button>


        </Box>
    );
}
export default EditPasswordScreen;