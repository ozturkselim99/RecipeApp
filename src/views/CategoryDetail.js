import * as React from 'react';
import Box from '../components/Box';
import Text from '../components/Text';
import theme from '../utils/Theme';
import {FlatList, Image, ImageBackground} from 'react-native';
import {Clock, Star} from '../components/icons';
import Button from '../components/Button';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function CategoryDetailScreen({route}) {
  const navigation = useNavigation();
  const {categoryId, categoryName} = route.params;
  const [recipes, setRecipes] = React.useState([]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
      headerBackTitle: '',
      headerTintColor: theme.colors.mainText,
    });
  }, [navigation]);

  React.useEffect(() => {
    const getRecipesByCategory = async () => {
      return await fetch(
        'http://localhost:3000/recipes?_expand=user&categoryId=' + categoryId,
      ).then(data => data.json());
    };
    getRecipesByCategory().then(data => setRecipes(data));
  }, [categoryId]);

  const renderRecipe = ({item}) => {
    return (
      <>
        <Button>
          <Box flexDirection={'row'} flex={1}>
            <ImageBackground
              source={{uri: item.image}}
              imageStyle={{
                borderRadius: theme.radii.input,
              }}
              style={{
                resizeMode: 'cover',
                height: 100,
                width: 140,
                marginRight: 10,
                overflow: 'hidden',
              }}>
              <LinearGradient
                colors={['transparent', 'black']}
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                }}>
                <Box flexDirection={'column'} mt={8}>
                  <Box flexDirection={'row'} alignItems={'center'} mb={3}>
                    <Star fill={'#f3a83b'} stroke={''} height={15} />
                    <Text fontSize={13} color={'white'}>
                      {item.rating}
                    </Text>
                  </Box>

                  <Box flexDirection={'row'} alignItems={'center'} mb={3}>
                    <Clock stroke={'white'} height={15} />
                    <Text fontSize={13} color={'white'}>
                      {item.time}
                    </Text>
                  </Box>
                </Box>
              </LinearGradient>
            </ImageBackground>
            <Box flexDirection={'column'} flex={1}>
              <Text
                color={theme.colors.mainText}
                fontWeight={'bold'}
                fontSize={17}>
                {item.title}
              </Text>
              <Text color={theme.colors.mainGray} fontSize={14} mt={5}>
                süt, şeker, yumurta, yağ, yufka, yufka, süt, flan
              </Text>
              <Box flexDirection={'row'} alignItems={'center'} mt={8}>
                <Image
                  source={{uri: item.user.avatar}}
                  style={{
                    width: 21,
                    height: 21,
                    borderRadius: theme.radii.full,
                  }}
                />
                <Text color={theme.colors.mainText} fontSize={13} ml={5}>
                  {item.user.fullName}
                </Text>
              </Box>
            </Box>
          </Box>
        </Button>
      </>
    );
  };

  const itemSeparator = () => (
    <Box height={1} width={'100%'} backgroundColor="#e2e3e4" my={15} />
  );

  return (
    <Box as={SafeAreaView} bg={'white'} flex={1}>
      <Box px={24} mt={30}>
        <Text
          fontSize="30px"
          fontWeight={700}
          color={theme.colors.mainText}
          mt={12}
          mb={30}>
          {categoryName}
        </Text>
        <FlatList
          data={recipes}
          ItemSeparatorComponent={itemSeparator}
          renderItem={renderRecipe}
          showsVerticalScrollIndicator={false}
        />
      </Box>
    </Box>
  );
}
