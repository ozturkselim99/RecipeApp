import * as React from 'react';
import FormInput from '../components/FormInput';
import Box from '../components/Box';
import Text from '../components/Text';
import Input from '../components/Input'
import Button from '../components/Button';
import theme from '../utils/Theme';
import { Mail, Lock, Key, Key2, RightArrow } from '../components/icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Auth } from 'aws-amplify';
import BlankAvatar from '../img/BlankAvatar2.png';
import { Image, TextInput, View } from 'react-native';
import selo from '../img/selo.jpg';
import { API, graphqlOperation } from 'aws-amplify';
import { useRoute } from '@react-navigation/native';

function ArrowIcon() {
  return <RightArrow fill="gray" />;
}

function KeyIconn() {
  return <Key2 fill="black" />;
}


function EditProfileScreen({ navigation }) {

  // const [user, setUser] = React.useState(null);

  // const route = useRoute();

  // React.useEffect(() => {
  //   const fetchRecipe = async (id) => {
  //     return API.graphql(graphqlOperation(getUser, {id: id}));
  //   };

  //   if (route?.params.id) {
  //     fetchRecipe(route.params.id)
  //       .then(async (user) => {
  //         setUser(user.data.getUser);
  //         console.log(user.data.getUser);
  //       })
  //       .catch((e) => console.log(e));
  //   }
  // }, [route.params.id]);


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
          Kullanıcı Bilgilerim
          </Text>
        <Box px="24px" mt='12px' mb='12px' textAlign="center" justifyContent="center" flexDirection="row" >
          <Image source={selo} style={{ width: 115, height: 115, borderRadius: 9999 }} />
        </Box>
        <Button
          onPress={() => { }}>
          <Text color="darkblue" fontWeight="700" fontSize="12">
            Profil Fotoğrafını Değiştir
            </Text>
        </Button>
      </Box>

      <View
        style={{
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
        }}
      />

      <Box flexDirection="row">
        <Box mr="15" mt="15">
          <Text fontSize="13" fontWeight="700" >Ad Soyad</Text>
        </Box>

        <Box>
          <TextInput
            fontWeight="600"
            onChange={() => { console.log("log calıstı") }}>
            Ahmet Selim Öztürk
          </TextInput>
        </Box>
      </Box>

      <View
        style={{
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
        }}
      />

      <Box flexDirection="row">
        <Box mr="39" mt="15">
          <Text fontSize="13" fontWeight="700" >Email</Text>
        </Box>

        <Box>
          <TextInput fontWeight="600">
            selocan9935@gmail.com
            </TextInput>
        </Box>
      </Box>

      <View
        style={{
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
        }}
      />

      <Box mb="12" mt="15" justifyContent="space-between" flexDirection="row">
        <Button onPress={() => navigation.navigate('EditPassword')}><KeyIconn /></Button>
        <Button mr="75" onPress={() => navigation.navigate('EditPassword')}><Text color="black">
          Şifrenizi Değiştirmek İçin Tıklayınız
            </Text>
        </Button>
        <Button onPress={() => navigation.navigate('EditPassword')}><ArrowIcon /></Button>
      </Box>

      <View
        style={{
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
        }}
      />

      <Button
        mt="24"
        onPress={() => { }}>
        <Text fontWeight={700} fontSize="17px" color={theme.colors.mainText}>
          Kaydet
          </Text>
      </Button>
    </Box>
  );
}
export default EditProfileScreen;