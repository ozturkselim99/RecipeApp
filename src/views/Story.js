import * as React from 'react';
import Box from '../components/Box';
import Text from '../components/Text';
import {Image} from 'react-native';
import {Dimensions, TouchableOpacity} from 'react-native';
import theme from '../utils/Theme';
import sampleData from '../data.js';

export default function StoryScreen({route, navigation}) {
  const [userStories, setUserStories] = React.useState([]);
  const [activeStoryIndex, setActiveStoryIndex] = React.useState(0);
  const stories = route.params?.story.stories;
  const dataStoriesLength = sampleData.stories.length;
  const userIndex = route.params?.userIndex;
  const user = {
    avatar: route.params.story.avatar,
    username: route.params?.story.username,
    postedTime: route.params.story.stories[activeStoryIndex].postedTime,
    storyImage: route.params.story.stories[activeStoryIndex].imageUri,
  };

  React.useEffect(() => {
    setUserStories(stories);
  }, [stories]);

  const navigateToNextUser = () => {
    dataStoriesLength - 1 > userIndex
      ? navigation.push('Story', {
          story: sampleData.stories[userIndex + 1],
          userIndex: userIndex + 1,
        })
      : navigation.navigate('Home');
  };
  const navigateToPrevUser = () => {
    userIndex - 1 !== -1
      ? navigation.push('Story', {
          story: sampleData.stories[userIndex - 1],
          userIndex: userIndex - 1,
        })
      : navigation.navigate('Home');
  };
  const handlePress = (e) => {
    const x = e.nativeEvent.locationX;
    const screenWidth = Dimensions.get('window').width;
    x < screenWidth / 2 ? handlePrevStory() : handleNextStory();
  };

  const handleNextStory = () => {
    activeStoryIndex >= userStories.length - 1
      ? navigateToNextUser()
      : setActiveStoryIndex(activeStoryIndex + 1);
  };
  const handlePrevStory = () => {
    activeStoryIndex <= 0
      ? navigateToPrevUser()
      : setActiveStoryIndex(activeStoryIndex - 1);
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={1}>
      <Box
        position="absolute"
        zIndex={1}
        flexDirection="row"
        pt={16}
        pl={12}
        alignItems="center">
        <Image
          source={{
            uri: user.avatar,
          }}
          style={{width: 48, height: 48, borderRadius: theme.radii.full}}
        />
        <Text fontWeight={700} fontSize="16px" color="white" ml={12}>
          {route.params?.story.username}
        </Text>
        <Text fontSize="16px" color={theme.colors.mainGray} ml={12}>
          {user.postedTime}
        </Text>
      </Box>
      <Image
        style={{width: '100%', height: '100%'}}
        source={{
          uri: user.storyImage,
        }}
      />
    </TouchableOpacity>
  );
}
