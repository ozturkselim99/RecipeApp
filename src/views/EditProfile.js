import * as React from 'react';
import Box from '../components/Box';
import Text from '../components/Text';
import Input from '../components/Input'
import Button from '../components/Button';
import theme from '../utils/Theme';
import { Key2, RightArrow } from '../components/icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, Settings, ChefHat, Playlist } from '../components/icons';
import { Image, TextInput, View } from 'react-native';
import selo from '../img/selo.jpg';
import { S3Image } from 'aws-amplify-react-native';


function ArrowIcon() {
  return <RightArrow fill="gray" />;
}

function KeyIconn() {
  return <Key2 fill="black" />;
}

function EditProfileScreen({ navigation, route }) {

  const user = {
    avatar: route.params.user.avatar,
    fullname: route.params.user.fullname,
    email: route.params.user.email,
    id: route.params.user.id,
  };

  React.useEffect(() => {
    console.log("name " + route.params.user.fullname)
    console.log("email " + route.params.user.email)
    console.log("avatar " + route.params.user.avatar)
    console.log("id " + route.params.user.id)
  }, []);

  return (
    <Box
      as={SafeAreaView}
      bg={'white'}
      flexDirection="column"
      flex={1}
      px='30px'
      py='24px'
    >
      <Box alignItems="center" mb="12px">
        {/* <Button
          onPress={() => {
            navigation.goBack();
          }}
          px={20}>
          <ChevronLeft
            stroke={theme.colors.mainText}
            height={24}
            width={24}
          />
        </Button> */}
        <Text
          fontWeight={700}
          fontSize="22px"
          color={theme.colors.mainText}
          lineHeigt="32"
          textAlign={'center'}>
          Kullanıcı Bilgilerim
          </Text>
        <Box px="24px" mt='12px' mb='12px' textAlign="center" justifyContent="center" flexDirection="row" >
          {/* <Image source={selo} style={{ width: 115, height: 115, borderRadius: 9999 }} /> */}
          <S3Image
            imgKey={user.avatar}
            style={{
              width: 115,
              height: 115,
              borderRadius: 9999,
            }}
          />
        </Box>
        <Button
          onPress={() => { }}>
          <Text color={theme.colors.mainText} fontWeight="700" fontSize="12px">
            Profil Fotoğrafını Değiştir
            </Text>
        </Button>
      </Box>



      <Box flexDirection="row">
        <Box mr="15px" mt="15px">
          <Text fontSize="15px" color="black">Ad Soyad</Text>
        </Box>

        <Box borderBottomWidth="0.5px" flex={1}>
          <Input
            color="black"
            fontsize="10px"
            onChange={() => { console.log("log calıstı") }}>
            {user.fullname}
          </Input>
        </Box>
      </Box>



      <Box flexDirection="row" borderBottomWidth="0.5px">
        <Box mr="39px" mt="15px">
          <Text fontSize="15px" color="black">Email</Text>
        </Box>

        <Box>
          <TextInput color="black">
            {user.email}
          </TextInput>
        </Box>
      </Box>

      <Box mt="15px" justifyContent="space-between" flexDirection="row" >
        <Button onPress={() => navigation.navigate('EditPassword')}><KeyIconn /></Button>
        <Button mr="60px" onPress={() => navigation.navigate('EditPassword')}><Text color="black">
          Şifrenizi Değiştirmek İçin Tıklayınız
            </Text>
        </Button>
        <Button onPress={() => navigation.navigate('EditPassword')}><ArrowIcon /></Button>
      </Box>


      <Button
        mt="24px"
        onPress={() => { }}>
        <Text fontWeight={700} fontSize="17px" color={theme.colors.mainText}>
          Kaydet
          </Text>
      </Button>
    </Box >
  );
}
export default EditProfileScreen;