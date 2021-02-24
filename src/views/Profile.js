import * as React from 'react';
import Box from '../components/Box';
import Text from '../components/Text';
import {View, StyleSheet, Dimensions} from 'react-native';
import theme from '../utils/Theme';
import {Share2} from '../components/icons';
import {ScrollView} from 'react-native-gesture-handler';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useNavigation} from '@react-navigation/native';
import AuthContext from '../context/AuthContext';
import {API, Auth, graphqlOperation} from 'aws-amplify';
import Button from '../components/Button';
import {fetchProfile} from '../graphql/queries';
import {S3Image} from 'aws-amplify-react-native';
import {ChevronLeft} from '../components/icons';

const FirstRoute = () => (
  <Box
    flexDirection="row"
    px={24}
    flexWrap="wrap"
    justifyContent={'space-between'}
  />
);

const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#673ab7'}]} />
);

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: theme.colors.mainGreen}}
    style={{backgroundColor: 'white', color: 'black'}}
    renderLabel={({route, focused, color}) => (
      <Text color={theme.colors.mainText} fontSize={15} fontWeight={600}>
        {route.title}
      </Text>
    )}
  />
);

export default function ProfileScreen({route}) {
  const userId = route.params?.id;
  const myProfile = route.params?.myProfile;
  const [index, setIndex] = React.useState(0);
  const [user, setUser] = React.useState({});
  const [isFollowing, setIsFollowing] = React.useState(false);
  const [followingCount, setFollowings] = React.useState(0);
  const navigation = useNavigation();

  const {isLogged, setLogged, setUserId} = React.useContext(AuthContext);

  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

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
        ? null
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
        graphqlOperation(fetchProfile, {id: userId}),
      );
      if (userData) {
        setUser(userData.data.getUser);
        setFollowings(userData.data.listFollowings.items.length);
      }
    };
    fetchUser();
  }, [isLogged, userId]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const initialLayout = {width: Dimensions.get('window').width};

  return (
    <Box bg={'white'} flex={1}>
      <ScrollView>
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
            <Box mt="15px">
              <Button
                borderRadius={theme.radii}
                bg={
                  isFollowing ? theme.colors.mainGreen : theme.colors.mainText
                }
                py="5px"
                onPress={() => {
                  setIsFollowing(!isFollowing);
                }}>
                <Text color={'white'}>
                  {isFollowing ? 'Takibi Bırak' : 'Takip Et'}
                </Text>
              </Button>
            </Box>
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
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
