import * as React from 'react';
import Box from '../components/Box';
import Text from '../components/Text';
import Button from '../components/Button';
import {ScrollView, FlatList, StatusBar} from 'react-native';
import StoryContainer from '../components/StoryContainer';
import theme from '../utils/Theme';
import RecipeCard from '../components/RecipeCard';
import TagSelector from '../components/TagSelector';
import sampleData from '../data.js';
import {API, graphqlOperation} from 'aws-amplify';
import {listCategorys} from '../graphql/queries';
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image
        steps {
          nextToken
        }
        category {
          id
          title
          image
          createdAt
          updatedAt
        }
        country {
          id
          flag
          name
          createdAt
          updatedAt
        }
        user {
          id
          email
          fullname
          avatar
          createdAt
          updatedAt
        }
        likes {
          items {
            id
            user {
              id
            }
          }
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
const data = [
  {id: 1, label: 'Money'},
  {id: 2, label: 'Credit card'},
  {id: 3, label: 'Debit card'},
  {id: 4, label: 'Online payment'},
  {id: 5, label: 'Bitcoin'},
];
export default function HomeScreen({navigation}) {
  const [recipes, setRecipes] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [filterRecipes, setFilterRecipes] = React.useState([]);
  const [filter, setFilter] = React.useState(false);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'LOGOLOGO',
      headerStyle: {elevation: 0, shadowColor: 'transparent'},
      headerTitleStyle: {
        textAlign: 'center',
        fontSize: 17,
        color: theme.colors.mainText,
      },
    });
  });
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const recipes = await API.graphql(graphqlOperation(listRecipes));
        const categories = await API.graphql(graphqlOperation(listCategorys));
        setCategories(categories.data.listCategorys.items);
        setRecipes(recipes.data.listRecipes.items);
      } catch (e) {
        console.log(e);
      }
    };
    console.log(filterRecipes);
    fetchData();
  }, [filterRecipes]);
  return (
    <Box bg={'white'} flex={1} as={ScrollView}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <StoryContainer stories={sampleData.stories} />
      <Box mt="16px" ml="24px">
        <Text fontWeight="700" fontSize="17px" color={theme.colors.mainText}>
          Category
        </Text>
        <Box
          flexDirection="row"
          as={ScrollView}
          horizontal
          mt="16px"
          showsHorizontalScrollIndicator={false}>
          <TagSelector
            tags={categories}
            multiple
            onChange={(selected) => {
              if (selected.length > 0) {
                setFilter(true);
                const filterData = recipes.filter((item) => {
                  return selected.includes(item.category.id);
                });
                setFilterRecipes(filterData);
              } else {
                setFilter(false);
              }
            }}
          />
        </Box>
      </Box>

      <FlatList
        //Bakılcak ASÖ
        ListHeaderComponent={() => (
          <>
            {/* <StoryContainer stories={sampleData.stories} />*/}
            {/*            <Box mt="20px" ml="24px">
                <Text
                  fontWeight="700"
                  fontSize="17px"
                  color={theme.colors.mainText}>
                  Category
                </Text>
                {
                  <Box
                    as={ScrollView}
                    horizontal
                    flexDirection="row"
                    mt="16px"
                    showsHorizontalScrollIndicator={false}>
                    <TagSelector
                      tags={categories}
                      multiple
                      onChange={(selected) => {
                        const filterData = recipes.filter((item) => {
                          return selected.includes(item.category.id);
                        });
                        setFilterRecipes(filterData);
                      }}
                    />
                  </Box>
                }
              </Box>*/}
          </>
        )}
        data={filter ? filterRecipes : recipes}
        ItemSeparatorComponent={() => <Box size={10} />}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          paddingHorizontal: 24,
          marginTop: 18,
        }}
        renderItem={({item}) => (
          <RecipeCard
            item={item}
            onPress={() =>
              navigation.navigate('DetailRecipe', {
                id: item.id,
              })
            }
          />
        )}
        numColumns={2}
        keyExtractor={(item) => item.id}
        key={2}
      />
    </Box>
  );
}
