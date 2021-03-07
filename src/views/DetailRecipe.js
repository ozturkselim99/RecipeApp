import * as React from 'react';
import Box from '../components/Box';
import {Platform, Dimensions, ActivityIndicator, Modal} from 'react-native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import Text from '../components/Text';
import {Heart, CheckCircle, Eye, ChevronLeft} from '../components/icons';
import theme from '../utils/Theme';
import {Image} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {API, graphqlOperation} from 'aws-amplify';
import {getRecipe} from '../graphql/queries';
import {SafeAreaView} from 'react-native-safe-area-context';
import {S3Image} from 'aws-amplify-react-native';
import Button from '../components/Button';
import ImageViewer from 'react-native-image-zoom-viewer';
import Close from '../components/icons/X';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;

function CloseIcon() {
  return <Close stroke={theme.colors.mainText} />;
}

const renderContent = (recipe, modalVisible, setModalVisible) => {
  const images = recipe.steps.items.map((step) => {
    return {url: step.images[0]};
  });
  return (
    <Box px="24px">
      <Modal visible={modalVisible} transparent={true}>
        <ImageViewer
          imageUrls={images}
          onSwipeDown={() => {
            setModalVisible(false);
            console.log('onSwipeDown');
          }}
          enableSwipeDown={true}
          renderHeader={() => (
            <Button
              justifyContent={'flex-end'}
              pt={20}
              pr={10}
              onPress={() => {
                setModalVisible(false);
              }}>
              <Close stroke={'white'} height={24} width={24} />
            </Button>
          )}
        />
      </Modal>
      <Box
        style={{
          height: 5,
          backgroundColor: 'gray',
          width: 40,
          borderRadius: 100,
        }}
        mt="16px"
        mx="auto"
      />
      <Box py="30px">
        <Text color={theme.colors.mainText} fontSize="17px" fontWeight="bold">
          {recipe.title}
        </Text>
        <Text
          color={theme.colors.secondaryText}
          fontSize="15px"
          fontWeight={500}
          mt="8px">
          {recipe.category.title}
        </Text>
      </Box>
      <Box flexDirection="column">
        <Box
          flexDirection="row"
          justifyContent={'space-between'}
          alignItems="center">
          <S3Image
            imgKey={recipe.user.avatar}
            resizeMode="contain"
            style={{width: 31, height: 31, borderRadius: 11}}
          />
          <Box flex={1} ml={10}>
            <Text
              color={theme.colors.mainText}
              fontSize="15px"
              fontWeight="bold">
              {recipe && recipe.user.fullname}
            </Text>
          </Box>
          <Box flexDirection={'row'}>
            <Box
              size="32px"
              borderRadius="32px"
              bg={theme.colors.mainGreen}
              justifyContent="center"
              alignItems="center">
              <Heart stroke="white" />
            </Box>
            <Box alignItems="center" justifyContent="center" ml="8px">
              <Text
                fontSize="15px"
                fontWeight="bold"
                color={theme.colors.mainText}>
                10000 likes
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box mt="34px">
        <Text fontSize="15px" fontWeight="bold" color={theme.colors.mainText}>
          Description
        </Text>
        <Text
          fontSize="15px"
          fontWeight={500}
          color={theme.colors.secondaryText}>
          {recipe.description}
        </Text>
      </Box>
      <Box mt="25px">
        <Text fontSize="15px" fontWeight="bold" color={theme.colors.mainText}>
          Ingredients
        </Text>
        <Box flexDirection="column" mt="12px">
          <Box flexDirection="row">
            <CheckCircle stroke={theme.colors.mainGreen} />
            <Text color={theme.colors.mainText} ml="8px">
              4 Eggs
            </Text>
          </Box>
        </Box>
        <Box flexDirection="column" mt="10px">
          <Box flexDirection="row">
            <CheckCircle stroke={theme.colors.mainGreen} />
            <Text color={theme.colors.mainText} ml="8px">
              1/2 Butter
            </Text>
          </Box>
        </Box>
        <Box flexDirection="column" mt="10px">
          <Box flexDirection="row">
            <CheckCircle stroke={theme.colors.mainGreen} />
            <Text color={theme.colors.mainText} ml="8px">
              4 Eggs
            </Text>
          </Box>
        </Box>
      </Box>
      <Box mt="25px">
        <Text fontSize="15px" fontWeight="bold" color={theme.colors.mainText}>
          Nasıl Yapılır?
        </Text>
        {recipe.steps.items.map((step, index) => (
          <React.Fragment key={index}>
            <Box flexDirection="row" mt={15}>
              <Box
                borderRadius="12px"
                width={24}
                height={23}
                bg={theme.colors.mainText}
                alignItems="center"
                justifyContent="center">
                <Text color="white">{index + 1}</Text>
              </Box>
              <Text
                color={theme.colors.mainText}
                ml="8px"
                fontSize="15px"
                pr="24px">
                {step.description}
              </Text>
            </Box>
            <Box alignItems="center" justifyContent="center" mt="14px">
              <Button
                onPress={() => {
                  setModalVisible(true);
                }}>
                <Image
                  source={{uri: step.images[0]}}
                  style={{width: 280, height: 171, borderRadius: 12}}
                />
              </Button>
            </Box>
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

function DetailRecipe() {
  const [recipe, setRecipe] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);

  const route = useRoute();

  React.useEffect(() => {
    const fetchRecipe = async (id) => {
      return API.graphql(graphqlOperation(getRecipe, {id: id}));
    };

    if (route?.params.id) {
      fetchRecipe(route.params.id)
        .then(async (recipe) => {
          setRecipe(recipe.data.getRecipe);
          console.log(recipe.data.getRecipe);
        })
        .catch((e) => console.log(e));
    }
  }, [route.params.id]);

  return recipe ? (
    <ReactNativeParallaxHeader
      statusBarColor={'transparent'}
      headerMinHeight={HEADER_HEIGHT}
      headerMaxHeight={300}
      extraScrollHeight={20}
      backgroundImage={{uri: recipe?.image[0]}}
      backgroundImageScale={1.2}
      renderContent={() => renderContent(recipe, modalVisible, setModalVisible)}
      containerStyle={{flex: 1, background: 'white'}}
      contentContainerStyle={{flexGrow: 1, background: 'white'}}
      innerContainerStyle={{flex: 1, background: 'white'}}
      navbarColor={'transparent'}
    />
  ) : (
    <Box as={SafeAreaView} flex={1} justifyContent={'center'}>
      <ActivityIndicator size="large" />
    </Box>
  );
}
export default DetailRecipe;
