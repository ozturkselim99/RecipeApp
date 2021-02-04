import * as React from 'react';
import Box from '../components/Box';
import Text from '../components/Text';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList} from 'react-native';
import StoryContainer from '../components/StoryContainer';
import theme from '../utils/Theme';
import Button from '../components/Button';
import SelectMultipleButton from '../components/SelectMultipleButton';
import RecipeCard from '../components/RecipeCard';

export default function HomeScreen() {
  const stories = [
    {
      key: 'ozaferayan',
      isStoryInsertable: true,
      hasStory: false,
      src: 'https://i.pravatar.cc/150?img=8',
    },
    {key: 'ngordon', hasStory: true, src: 'https://i.pravatar.cc/150?img=8'},
    {
      key: 'r_von_rails',
      hasStory: true,
      src: 'https://i.pravatar.cc/150?img=9',
    },
    {key: 'figNelson', hasStory: true, src: 'https://i.pravatar.cc/150?img=10'},
    {
      key: 'benjaminEv',
      hasStory: true,
      src: 'https://i.pravatar.cc/150?img=11',
    },
    {key: 'gilesPos', hasStory: true, src: 'https://i.pravatar.cc/150?img=12'},
    {key: 'hugh27', hasStory: true, src: 'https://i.pravatar.cc/150?img=13'},
    {
      key: 'b_guidelines',
      hasStory: true,
      src: 'https://i.pravatar.cc/150?img=14',
    },
  ];

  const onStoryPress = () => {};
  return (
    <Box as={SafeAreaView}>
      <FlatList
        ListHeaderComponent={() => (
          <StoryContainer stories={stories} onStoryPress={onStoryPress} />
        )}
        data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}]}
      />
      <Box mt="20px" ml="24px">
        <Text fontWeight="700" fontSize="17px" color={theme.colors.mainText}>
          Category
        </Text>
      </Box>
      <Box flexDirection="row" px="24px" mt="16px">
        <Button
          bg={theme.colors.mainGreen}
          px="24px"
          py="15px"
          borderRadius={theme.radii.button}>
          <Text color="white" fontSize="15px" fontWeight="700">
            All
          </Text>
        </Button>
        <Button
          bg={theme.colors.mainGreen}
          px="24px"
          py="15px"
          mx="16px"
          borderRadius={theme.radii.button}>
          <Text color="white" fontSize="15px" fontWeight="700">
            All
          </Text>
        </Button>
        <Button
          bg={theme.colors.mainGreen}
          px="24px"
          py="15px"
          borderRadius={theme.radii.button}>
          <Text color="white" fontSize="15px" fontWeight="700">
            All
          </Text>
        </Button>
      </Box>
      <Box pl="24px" mt="24px">
        <RecipeCard />
      </Box>

    </Box>
  );
}
