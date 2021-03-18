import * as React from 'react';
import Box from '../components/Box';
import Text from '../components/Text';
import { FlatList, ActivityIndicator } from 'react-native';
import theme from '../utils/Theme';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../context/AuthContext';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import Button from '../components/Button';
import { S3Image } from 'aws-amplify-react-native';
import { ChevronLeft, Settings, ChefHat, Playlist } from '../components/icons';
import RecipeCard from '../components/RecipeCard';
import { deleteFollowing } from '../graphql/mutations';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useFocusEffect } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!, $myId: ID!) {
    getUser(id: $id) {
      id
      email
      fullname
      avatar
      recipes {
        items {
          id
        }
      }
    }
    getFollowingsByUserId(followerId: $id) {
      scannedCount
    }
    getFollowersByUserId(followingId: $id) {
      scannedCount
    }
    getIsFollowing(followingId: $id, followerId: {eq: $myId}) {
      count
      scannedCount
      items {
        id
      }
    }
  }
`;

const getLikes = /* GraphQL */ `
  query getLikes($id: ID!) {
    likesByUserId(userId: $id) {
      items {
        id
        recipe {
          category {
            title
          }
          image
          id
          title
          likes {
            items {
              id
              user {
                id
              }
            }
          }
          user {
            id
            fullname
            avatar
          }
        }
      }
    }
  }
`;

const getRecipes = /* GraphQL */ `
  query getRecipes($id: ID!) {
    getRecipesByUserId(userId: $id) {
      items {
        id
        title
        image
        category {
          title
        }
        likes {
          items {
            id
            user {
              id
            }
          }
        }
      }
    }
  }
`;

const createFollowing = /* GraphQL */ `
  mutation CreateFollowing(
    $input: CreateFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    createFollowing(input: $input, condition: $condition) {
      id
    }
  }
`;

function UserRecipesScreen({ userId }) {
  const [recipes, setRecipes] = React.useState([]);
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      const fetchRecipes = async () => {
        await API.graphql(graphqlOperation(getRecipes, { id: userId })).then(
          (res) => {
            setRecipes(res.data.getRecipesByUserId.items);
          },
        );
      };
      fetchRecipes();
      const unsubscribe = navigation.addListener('tabPress', (e) => {
        fetchRecipes();
      });

      return unsubscribe;
    }, [navigation, userId]),
  );

  return (
    <Box flex={1} bg={'white'}>
      <Box
        as={FlatList}
        px={24}
        mt={18}
        data={recipes}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        ItemSeparatorComponent={() => <Box size={30} />}
        renderItem={({ item }) => (
          <RecipeCard
            item={item}
            profile={true}
            onPress={() =>
              navigation.navigate('DetailRecipe', {
                id: item.id,
              })
            }
          />
        )}
        numColumns={2}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
}

function UserLikesScreen({ userId }) {
  const [likes, setLikes] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigation();

  React.useEffect(() => {
    const fetchLikes = async () => {
      await API.graphql(graphqlOperation(getLikes, { id: userId })).then(
        (res) => {
          setLikes(res.data.likesByUserId.items);
          setLoading(true);
        },
      );
    };
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      fetchLikes();
    });

    return unsubscribe;
  });
  return (
    <Box flex={1} bg={'white'}>
      {!loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <Box
          as={FlatList}
          px={24}
          mt={18}
          data={likes}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          ItemSeparatorComponent={() => <Box size={30} />}
          renderItem={({ item }) => (
            <RecipeCard
              item={item.recipe}
              onPress={() =>
                navigation.navigate('DetailRecipe', {
                  id: item.recipe.id,
                })
              }
            />
          )}
          numColumns={2}
          keyExtractor={(item) => item.id}
        />
      )}
    </Box>
  );
}

export default function ProfileScreen({ route }) {
  const profileId = route.params?.id;
  const myProfile = route.params?.myProfile;
  const [followingsCount, setFollowingsCount] = React.useState(0);
  const [followersCount, setFollowersCount] = React.useState(0);
  const [user, setUser] = React.useState({});
  const [isFollowing, setIsFollowing] = React.useState({
    isFollowing: false,
    id: '',
  });
  const navigation = useNavigation();

  const { setLogged, setUserId, userId } = React.useContext(AuthContext);

  const followHandler = async () => {
    const follow = {
      followingId: profileId,
      followerId: userId,
    };
    await API.graphql(graphqlOperation(createFollowing, { input: follow }))
      .then((response) => {
        setIsFollowing({
          isFollowing: true,
          id: response.data.createFollowing.id,
        });
        setFollowersCount(followersCount + 1);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const unFollowHandler = async () => {
    await API.graphql(
      graphqlOperation(deleteFollowing, { input: { id: isFollowing.id } }),
    )
      .then(() => {
        setIsFollowing({ isFollowing: false, id: '' });
        setFollowersCount(followersCount - 1);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: user ? user.fullname : ' ',
      headerRight: () =>
        myProfile ? (
          <Button
            onPress={() => {
              Auth.signOut().then(() => {
                navigation.navigate('Auth');
                setLogged(false);
                setUserId('');
              });
            }}
            px={20}>
            <Settings stroke={theme.colors.mainText} />
          </Button>
        ) : null,
      headerLeft: myProfile
        ? () => <Box />
        : () => (
          <Button
            onPress={() => {
              navigation.goBack();
            }}
            px={20}>
            <ChevronLeft
              stroke={theme.colors.mainText}
              height={24}
              width={24}
            />
          </Button>
        ),
      headerStyle: { elevation: 0, shadowColor: 'transparent' },
      headerTitleStyle: {
        textAlign: 'center',
        fontSize: 17,
        color: theme.colors.mainText,
      },
    });
  });

  useFocusEffect(
    React.useCallback(() => {
      const fetchUser = async () => {
        await API.graphql(
          graphqlOperation(getUser, { id: profileId, myId: userId }),
        ).then((userData) => {
          setUser(userData.data.getUser);
          if (userData.data.getIsFollowing.scannedCount !== 0) {
            setIsFollowing({
              isFollowing: true,
              id: userData.data.getIsFollowing.items[0].id,
            });
          }
          setFollowingsCount(userData.data.getFollowingsByUserId.scannedCount);
          setFollowersCount(userData.data.getFollowersByUserId.scannedCount);
        });
      };
      fetchUser();
    }, [profileId, userId]),
  );

  return user ? (
    <Box bg={'white'} flex={1}>
      <Box flexDirection="row" px="24px" mt={15}>
        <Box justifyContent="center" mr={20}>
          <S3Image
            imgKey={user.avatar}
            style={{
              width: 90,
              height: 90,
              borderRadius: 9999,
            }}
          />
        </Box>
        <Box flexDirection={'column'} flex={1}>
          <Box flexDirection={'row'} justifyContent={'space-between'}>
            <Box aligItems="center">
              <Text
                fontWeight={700}
                fontSize={17}
                color={theme.colors.mainText}
                textAlign="center">
                {user.recipes?.items.length}
              </Text>
              
              {/* Buraya tıklandığında Profil Edit sayfası açılacak.  */}
              <Button
                onPress={() => navigation.navigate('EditProfile', {userId: profileId})}>
                <Text
                  mt={2}
                  fontWeight={500}
                  fontSize={15}
                  color={theme.colors.secondaryText}>
                  Tarif
              </Text>
              </Button>

            </Box>
            <Box alignItems={'center'}>
              <Text
                fontWeight={700}
                fontSize={17}
                color={theme.colors.mainText}>
                {followingsCount}
              </Text>
              <Button
                onPress={() =>
                  navigation.navigate('Following', { userId: profileId })
                }>
                <Text
                  mt={2}
                  fontWeight={500}
                  fontSize={15}
                  color={theme.colors.secondaryText}>
                  Takip
                </Text>
              </Button>
            </Box>
            <Box alignItems={'center'}>
              <Text
                fontWeight={700}
                fontSize={17}
                color={theme.colors.mainText}>
                {followersCount}
              </Text>
              <Button
                onPress={() =>
                  navigation.navigate('Followers', { userId: profileId })
                }>
                <Text
                  mt={2}
                  fontWeight={500}
                  fontSize={15}
                  color={theme.colors.secondaryText}>
                  Takipçi
                </Text>
              </Button>
            </Box>
          </Box>
          {!myProfile && (
            <Box mt="15px">
              <Button
                borderRadius={theme.radii}
                bg={
                  isFollowing.isFollowing
                    ? theme.colors.mainGreen
                    : theme.colors.mainText
                }
                py="8px"
                onPress={
                  isFollowing.isFollowing ? unFollowHandler : followHandler
                }>
                <Text color={'white'}>
                  {isFollowing.isFollowing ? 'Takibi Bırak' : 'Takip Et'}
                </Text>
              </Button>
            </Box>
          )}
        </Box>
      </Box>

      <Box mt={24} height={8} bg={theme.colors.mainGray} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            if (route.name === 'UserRecipes') {
              return <ChefHat fill={theme.colors.mainText} />;
            } else if (route.name === 'UserLikes') {
              return <Playlist fill={theme.colors.mainText} />;
            }
          },
        })}
        tabBarOptions={{
          showIcon: true,
          showLabel: false,
          indicatorStyle: {
            backgroundColor: theme.colors.mainGreen,
          },
        }}>
        <Tab.Screen
          name="UserRecipes"
          scree
          children={() => (
            <UserRecipesScreen userId={myProfile ? userId : profileId} />
          )}
        />
        <Tab.Screen
          name="UserLikes"
          children={() => (
            <UserLikesScreen userId={myProfile ? userId : profileId} />
          )}
        />
      </Tab.Navigator>
    </Box>
  ) : (
    <ActivityIndicator size="large" />
  );
}
