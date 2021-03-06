import Box from './Box';
import Text from './Text';
import theme from '../utils/Theme';
import Button from './Button';
import * as React from 'react';
import {S3Image} from 'aws-amplify-react-native';
import {API, graphqlOperation} from 'aws-amplify';
import AuthContext from '../context/AuthContext';
import {useNavigation} from '@react-navigation/native';
import {deleteFollowing} from '../graphql/mutations';

const getIsFollowing = `
query getIsFollowing ($profileId: ID!, $myId: ID!){
 getIsFollowing(followingId: $profileId, followerId: {eq: $myId}) {
      scannedCount
      items {
        id
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

export default function FollowList({item}) {
  const {userId} = React.useContext(AuthContext);
  const [isFollowing, setIsFollowing] = React.useState({
    followStatus: false,
    id: '',
  });
  const profileId = item.id;
  const navigation = useNavigation();

  const followHandler = async () => {
    const follow = {
      followingId: profileId,
      followerId: userId,
    };
    await API.graphql(graphqlOperation(createFollowing, {input: follow}))
      .then((response) => {
        setIsFollowing({
          followStatus: true,
          id: response.data.createFollowing.id,
        });
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
        setIsFollowing({followStatus: false, id: ''});
      })
      .catch((e) => {
        console.log(e);
      });
  };

  React.useEffect(() => {
    const isFollowing = async () => {
      await API.graphql(
        graphqlOperation(getIsFollowing, {profileId: profileId, myId: userId}),
      )
        .then((response) => {
          console.log(response.data.getIsFollowing);
          if (response.data.getIsFollowing.scannedCount !== 0) {
            setIsFollowing({
              followStatus: true,
              id: response.data.getIsFollowing.items[0].id,
            });
          }
        })
        .catch((e) => {
          console.log(e);
        });
    };
    isFollowing();
  }, [profileId, userId]);

  return (
    <Box
      as={Button}
      flexDirection="row"
      mt="24px"
      justifyContent={'space-between'}
      onPress={() => {
        if (userId === profileId) {
          navigation.navigate('ProfileTab', {
            screen: 'ProfileDetail',
            params: {id: userId, myProfile: true},
          });
        } else {
          navigation.navigate('Profile', {id: profileId});
        }
      }}>
      <S3Image
        imgKey={item.avatar}
        resizeMode="contain"
        style={{width: 48, height: 48, borderRadius: theme.radii.full}}
      />
      <Box ml="16px" flex={1}>
        <Text fontSize="15px" fontWeight={700} color={theme.colors.mainText}>
          {item.fullname}
        </Text>
        <Text
          fontSize="12px"
          fontWeight={500}
          color={theme.colors.secondaryText}
          mt="3px">
          {item.fullname}
        </Text>
      </Box>
      <Button
        bg={
          isFollowing.followStatus
            ? theme.colors.mainGreen
            : theme.colors.mainText
        }
        borderRadius={theme.radii.button}
        px={24}
        height={40}
        onPress={isFollowing.followStatus ? unFollowHandler : followHandler}>
        <Text
          fontSize={12}
          fontWeight={500}
          color={'white'}
          alignItems="center">
          {isFollowing.followStatus ? 'Takibi Bırak' : 'Takip Et'}
        </Text>
      </Button>
    </Box>
  );
}
