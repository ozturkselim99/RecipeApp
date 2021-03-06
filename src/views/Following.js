import Box from '../components/Box';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import FollowList from '../components/FollowList';
import {API, graphqlOperation} from 'aws-amplify';
import {FlatList} from 'react-native';
import SearchBox from '../components/SearchBox';

const getFollowing = `
query getFollowing ($userId:ID!){
  getFollowingsByUserId(followerId: $userId) {
    items {
      following {
        fullname
        avatar
        id
      }
    }
  }
}
`;

export default function FollowingScreen({route}) {
  const [followings, setFollowings] = React.useState([]);
  const [filterFollowings, setFilterFollowings] = React.useState([]);
  const [isSearching, setIsSearching] = React.useState(false);
  const userId = route.params?.userId;

  React.useEffect(() => {
    const fetchFollowings = async () => {
      await API.graphql(graphqlOperation(getFollowing, {userId: userId})).then(
        (response) => {
          setFollowings(response.data.getFollowingsByUserId.items);
        },
      );
    };
    fetchFollowings();
  }, [followings, userId]);

  return (
    <Box as={SafeAreaView} pt="24px" px={'24px'} bg={'white'} flex={1}>
      <SearchBox
        onChangeText={(text) => {
          if (text.length > 0) {
            setIsSearching(true);
            const filterData = followings.filter((item) => {
              return item.following.fullname
                .toLowerCase()
                .includes(text.toLowerCase());
            });
            setFilterFollowings(filterData);
          } else {
            setIsSearching(false);
          }
        }}
      />
      <Box
        as={FlatList}
        mt={18}
        data={isSearching ? filterFollowings : followings}
        keyExtractor={(item, index) => {
          return item.following.id;
        }}
        renderItem={({item}) => <FollowList item={item.following} />}
      />
    </Box>
  );
}
