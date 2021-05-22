import * as React from 'react';
import Box from '../components/Box';
import {SafeAreaView, StatusBar, Image, FlatList} from 'react-native';
import {Search as SearchIcon} from '../components/icons';
import theme from '../utils/Theme';
import TrendingCard from '../components/TrendingCard';
import Text from '../components/Text';
import Button from '../components/Button';
import FormInput from '../components/FormInput';
import CategoryCard from '../components/CategoryCard';
import RecipeCard from '../components/RecipeCard';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [trending, setTrending] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [mostCategories, setMostCategories] = React.useState([]);

  React.useEffect(() => {
    const getTrending = async () => {
      return await fetch(
        'http://localhost:3000/recipes?_expand=user&trending=true',
      ).then((data) => data.json());
    };

    const getCategories = async () => {
      return await fetch(
        'http://localhost:3000/categories?_limit=10',
      ).then((data) => data.json());
    };

    const getMostCategoriesWithRecipes = async () => {
      return await fetch(
        'http://localhost:3000/categories?_embed=recipes&_limit=3',
      ).then((data) => data.json());
    };

    getTrending().then((data) => setTrending(data));
    getCategories().then((data) => setCategories(data));
    getMostCategoriesWithRecipes().then((data) => setMostCategories(data));
  }, []);

  const renderTrendingItem = ({item}) => {
    return (
      <TrendingCard
        title={item.title}
        image={item.image}
        rating={item.rating}
        time={item.time}
        user={item.user}
      />
    );
  };

  const renderCategoryItem = ({item}) => {
    return (
      <CategoryCard
        onPress={() => navigation.navigate('CategoryDetail')}
        title={item.title}
        image={item.image}
      />
    );
  };

  const renderRecipe = ({item}) => {
    return (
      <RecipeCard
        title={item.title}
        image={item.image}
        rating={item.rating}
        time={item.time}
      />
    );
  };

  const renderCategoryWithRecipesItem = ({item}) => {
    return (
      <Box pl={24} mt={20}>
        <Box
          flexDirection={'row'}
          pr={24}
          justifyContent={'space-between'}
          alignItems={'center'}>
          <Text
            color={theme.colors.mainText}
            fontWeight={'bold'}
            fontSize={19}
            mb={15}>
            {item.title}
          </Text>
          <Button mb={15}>
            <Text
              color={theme.colors.mainGray}
              fontWeight={'400'}
              fontSize={12}>
              Tümü
            </Text>
          </Button>
        </Box>
        <Box mb={15}>
          <FlatList
            data={item.recipes}
            renderItem={renderRecipe}
            horizontal
            keyExtractor={(item2, index) => `list-item-${index}`}
          />
        </Box>
      </Box>
    );
  };

  const headerComponent = () => {
    return (
      <>
        {/*Hello*/}
        <Box px={24} flexDirection={'row'} mt={15}>
          <Box flex={1}>
            <Text
              color={theme.colors.mainGreen}
              fontWeight={'bold'}
              fontSize={27}>
              Hello Furkan,
            </Text>
            <Text
              color={theme.colors.mainGray}
              fontWeight={'500'}
              fontSize={16}
              mt={7}>
              What you want to cook today?
            </Text>
          </Box>
          <Box alignItems={'flex-end'}>
            <Button onPress={() => navigation.navigate('Search')}>
              <Image
                source={require('../img/BlankAvatar2.png')}
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: theme.radii.full,
                }}
              />
            </Button>
          </Box>
        </Box>

        {/*Search Box*/}
        <Box px={24} mt={20}>
          <FormInput
            LeftIcon={() => <SearchIcon stroke={theme.colors.mainGray} />}
            placeholderText={'Search Recipes'}
            fontWeight={500}
            borderWidth={0}
            backgroundColor={theme.colors.lightGray}
            clearButtonMode="always"
          />
        </Box>

        {/*Trending Recipes*/}
        <Box pl={24} mt={20}>
          <Text
            color={theme.colors.mainText}
            fontWeight={'bold'}
            fontSize={19}
            mb={15}>
            Trending Recipes
          </Text>
          <Box>
            <FlatList
              data={trending}
              renderItem={renderTrendingItem}
              horizontal
              keyExtractor={(item, index) => `list-item-${index}`}
            />
          </Box>
        </Box>

        {/*Categories*/}
        <Box pl={24} mt={20}>
          <Text
            color={theme.colors.mainText}
            fontWeight={'bold'}
            fontSize={19}
            mb={15}>
            Categories
          </Text>
          <Box>
            <FlatList
              data={categories}
              renderItem={renderCategoryItem}
              horizontal
              keyExtractor={(item, index) => `list-item-${index}`}
            />
          </Box>
        </Box>
      </>
    );
  };

  return (
    <Box flex={1} as={SafeAreaView} bg={'white'}>
      <StatusBar barStyle={'dark-content'} />
      <Box>
        <FlatList
          data={mostCategories}
          ListHeaderComponent={headerComponent}
          renderItem={renderCategoryWithRecipesItem}
          keyExtractor={(item, index) => `list-item-${index}`}
        />
      </Box>
    </Box>
  );
}
