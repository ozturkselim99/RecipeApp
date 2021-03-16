import * as React from 'react';
import Box from '../components/Box';
import Text from '../components/Text';
import {Image} from 'react-native';
import {Dimensions, TouchableOpacity} from 'react-native';
import theme from '../utils/Theme';
import GestureRecognizer from 'react-native-swipe-gestures';
import sampleData from '../data.js';
import ProgressArray from '../components/ProgressArray';
import {BackHandler} from 'react-native';

export default function StoryScreen({route, navigation}) {
  const [userStories, setUserStories] = React.useState([]);
  const [activeStoryIndex, setActiveStoryIndex] = React.useState(0);
  const [isPause, setIsPause] = React.useState(false);
  const [progress, setProgress] = React.useState(1);
  const stories = route.params?.story.stories;
  const dataStoriesLength = sampleData.stories.length;
  const userIndex = route.params?.userIndex;
  const user = {
    avatar: route.params.story.avatar,
    username: route.params?.story.username,
    postedTime: route.params.story.stories[activeStoryIndex].postedTime,
    storyImage: route.params.story.stories[activeStoryIndex].imageUri,
  };

  const handleBackButtonClick = () => {
    navigation.navigate('Home');
    return true;
  };

  React.useEffect(() => {
    setUserStories(stories);
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, [navigation, stories]);

  const onPause = (result) => {
    console.log(result);
    setIsPause(result);
  };

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
    console.log('ileri');
    setProgress(0);
  };
  const handlePrevStory = () => {
    activeStoryIndex <= 0
      ? navigateToPrevUser()
      : setActiveStoryIndex(activeStoryIndex - 1);
    console.log('geri');
    setProgress(0);
  };

  return (
    <GestureRecognizer
      onSwipeLeft={navigateToNextUser}
      onSwipeRight={navigateToPrevUser}>
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={1}
        onLongPress={() => onPause(true)}
        onPressOut={() => onPause(false)}>
        <Box
          position="absolute"
          zIndex={1}
          flexDirection="column"
          width="100%"
          pt={16}
          px={12}>
          <ProgressArray
            progress={progress}
            pause={isPause}
            activeStoryIndex={activeStoryIndex}
            length={stories.map((_, i) => i)}
            nextStory={handleNextStory}
            prevStory={handlePrevStory}
          />
          <Box flexDirection="row" alignItems="center" mt={8}>
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
        </Box>
        <Image
          style={{width: '100%', height: '100%'}}
          source={{
            uri: user.storyImage,
          }}
        />
      </TouchableOpacity>
    </GestureRecognizer>
  );
}
