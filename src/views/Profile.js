import * as React from 'react';
import Box from '../components/Box';
import Text from '../components/Text';
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import theme from '../utils/Theme';
import {ChefHat, Playlist, Share2} from '../components/icons';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useNavigation} from '@react-navigation/native';
import AuthContext from '../context/AuthContext';
import {API, Auth, graphqlOperation} from 'aws-amplify';
import Button from '../components/Button';
import {fetchProfile, getFollowing, listFollowings} from '../graphql/queries';
import {S3Image} from 'aws-amplify-react-native';
import {ChevronLeft} from '../components/icons';
import RecipeCard from '../components/RecipeCard';
import {createFollowing, deleteFollowing} from '../graphql/mutations';

const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#673ab7'}]} />
);

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: theme.colors.mainGreen}}
    style={{backgroundColor: 'white', color: 'black'}}
    renderIcon={({route, focused, color}) => {
      if (route.icon === 'Tarifler') {
        return <ChefHat fill={theme.colors.mainText} />;
      } else {
        return <Playlist fill={theme.colors.mainText} />;
      }
    }}
  />
);

export default function ProfileScreen({route}) {
  const profileId = route.params?.id;
  const myProfile = route.params?.myProfile;
  const [index, setIndex] = React.useState(0);
  const [user, setUser] = React.useState({});
  const [isFollowing, setIsFollowing] = React.useState({
    isFollowing: false,
    id: '',
  });
  const [followingCount, setFollowings] = React.useState(0);
  const navigation = useNavigation();

  const {isLogged, setLogged, setUserId, userId} = React.useContext(
    AuthContext,
  );

  const [routes] = React.useState([
    {key: 'first', icon: 'Tarifler'},
    {key: 'second', icon: 'Kaydedilen Tarifler'},
  ]);
  const followHandler = async () => {
    const follow = {
      followingId: profileId,
      followerId: userId,
    };
    await API.graphql(graphqlOperation(createFollowing, {input: follow}))
      .then((data) => {
        //console.log(data);
        setIsFollowing({isFollowing: true, id: ''});
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const unFollowHandler = async () => {
    await API.graphql(
      graphqlOperation(deleteFollowing, {input: {id: isFollowing.id}}),
    )
      .then(() => {
        setIsFollowing({isFollowing: false, id: ''});
      })
      .catch((e) => {
        console.log(e);
      });
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: user ? user.fullname : ' ',
      headerRight: () => (
        <Button
          onPress={() => {
            Auth.signOut().then(() => {
              navigation.navigate('Auth');
              setLogged(false);
              setUserId('');
            });
          }}
          px={20}>
          <Share2 stroke={theme.colors.mainText} />
        </Button>
      ),
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
      headerStyle: {elevation: 0, shadowColor: 'transparent'},
      headerTitleStyle: {
        textAlign: 'center',
        fontSize: 17,
        color: theme.colors.mainText,
      },
    });
  });

  React.useEffect(() => {
    const fetchUser = async () => {
      const userData = await API.graphql(
        graphqlOperation(fetchProfile, {id: profileId}),
      );
      if (userData) {
        setUser(userData.data.getUser);
        setFollowings(userData.data.listFollowings.items.length);
      }
    };
    const followStatus = async () => {
      await API.graphql(
        graphqlOperation(listFollowings, {
          filter: {followingId: {eq: profileId}, followerId: {eq: userId}},
        }),
      ).then((s) => {
        if (s.data.listFollowings.items.length > 0) {
          setIsFollowing({
            isFollowing: true,
            id: s.data.listFollowings.items[0].id,
          });
        }
      });
    };
    fetchUser();
    !myProfile && followStatus();
  }, [isLogged, myProfile, profileId, userId]);

  const FirstRoute = () => (
    <Box
      as={FlatList}
      px={24}
      mt={18}
      data={user.recipes?.items}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      ItemSeparatorComponent={() => <Box size={30} />}
      renderItem={({item}) => (
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
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const initialLayout = {width: Dimensions.get('window').width};

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
                32
              </Text>
              <Text
                mt={2}
                fontWeight={500}
                fontSize={15}
                color={theme.colors.secondaryText}>
                Recipes
              </Text>
            </Box>
            <Box alignItems={'center'}>
              <Text
                fontWeight={700}
                fontSize={17}
                color={theme.colors.mainText}>
                782
              </Text>
              <Button onPress={() => navigation.navigate('Following')}>
                <Text
                  mt={2}
                  fontWeight={500}
                  fontSize={15}
                  color={theme.colors.secondaryText}>
                  Following
                </Text>
              </Button>
            </Box>
            <Box alignItems={'center'}>
              <Text
                fontWeight={700}
                fontSize={17}
                color={theme.colors.mainText}>
                {followingCount}
              </Text>
              <Text
                mt={2}
                fontWeight={500}
                fontSize={15}
                color={theme.colors.secondaryText}>
                Followers
              </Text>
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
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        initialLayout={initialLayout}
      />
    </Box>
  ) : (
    <ActivityIndicator size="large" />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
