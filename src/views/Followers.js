import Box from '../components/Box';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import FollowList from '../components/FollowList';
import FormInput from '../components/FormInput';
import theme from '../utils/Theme';
import {Search} from '../components/icons';
import {API, graphqlOperation} from 'aws-amplify';
import {FlatList} from 'react-native';
import SearchBox from '../components/SearchBox';

const getFollowers = `
query getFollowers ($userId:ID!){
  getFollowersByUserId(followingId: $userId) {
    items {
      follower {
        fullname
        avatar
        id
      }
    }
  }
}
`;

export default function FollowersScreen({route}) {
  const [followers, setFollowers] = React.useState([]);
  const [filterFollowers, setFilterFollowers] = React.useState([]);
  const [isSearching, setIsSearching] = React.useState(false);
  const userId = route.params?.userId;
  React.useEffect(() => {
    const fetchFollowers = async () => {
      await API.graphql(graphqlOperation(getFollowers, {userId: userId})).then(
        (response) => {
          setFollowers(response.data.getFollowersByUserId.items);
        },
      );
    };
    fetchFollowers();
  }, [userId]);

  return (
    <Box as={SafeAreaView} pt="24px" px={'24px'} bg={'white'} flex={1}>
      <SearchBox
        onChangeText={(text) => {
          if (text.length > 0) {
            setIsSearching(true);
            const filterData = followers.filter((item) => {
              return item.follower.fullname
                .toLowerCase()
                .includes(text.toLowerCase());
            });
            setFilterFollowers(filterData);
          } else {
            setIsSearching(false);
          }
        }}
      />
      <Box
        as={FlatList}
        mt={18}
        data={isSearching ? filterFollowers : followers}
        keyExtractor={(item, index) => {
          return item.follower.id;
        }}
        renderItem={({item}) => <FollowList item={item.follower} />}
      />
    </Box>
  );
}
