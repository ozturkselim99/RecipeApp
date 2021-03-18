import * as React from 'react';
import Box from '../components/Box';
import Text from '../components/Text';
import {ScrollView, FlatList, StatusBar} from 'react-native';
import StoryContainer from '../components/StoryContainer';
import theme from '../utils/Theme';
import RecipeCard from '../components/RecipeCard';
import TagSelector from '../components/TagSelector';
import sampleData from '../data.js';
import {API, graphqlOperation} from 'aws-amplify';
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
export default function HomeScreen({navigation}) {
  const [recipes, setRecipes] = React.useState([]);

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

  const tags = [
    {
      id: 'the',
      name: 'the',
    },
    {
      id: 'quick',
      name: 'quick',
    },
    {
      id: 'brown',
      name: 'brown',
    },
    {
      id: 'fox',
      name: 'fox',
    },
    {
      id: 'jumps',
      name: 'jumps',
    },
    {
      id: 'over',
      name: 'over',
    },
    {
      id: 'the2',
      name: 'the',
    },
    {
      id: 'lazy',
      name: 'lazy',
    },
    {
      id: 'dog',
      name: 'dog',
    },
  ];

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const recipes = await API.graphql(graphqlOperation(listRecipes));
        setRecipes(recipes.data.listRecipes.items);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);



  return (
    <Box bg={'white'} flex={1}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <Box>
        <FlatList
          ListHeaderComponent={() => (
            <>
              <StoryContainer
                stories={sampleData.stories}
              />
              <Box mt="20px" ml="24px">
                <Text
                  fontWeight="700"
                  fontSize="17px"
                  color={theme.colors.mainText}>
                  Category
                </Text>
                <Box as={ScrollView} horizontal flexDirection="row" mt="16px">
                  <TagSelector
                    tags={tags}
                    multiple
                    onChange={(selected) => console.log(selected)}
                  />
                </Box>
              </Box>
            </>
          )}
          data={recipes}
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
    </Box>
  );
}
