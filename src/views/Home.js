import * as React from 'react';
import Box from '../components/Box';
import Text from '../components/Text';
import {ScrollView, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import StoryContainer from '../components/StoryContainer';
import theme from '../utils/Theme';
import RecipeCard from '../components/RecipeCard';
import TagSelector from '../components/TagSelector';

export default function HomeScreen({navigation}) {
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
    <Box as={SafeAreaView} bg={'white'} flex={1}>
      <Box>
        <FlatList
          ListHeaderComponent={() => (
            <StoryContainer stories={stories} onStoryPress={onStoryPress} />
          )}
          data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}]}
        />
      </Box>
      <Box mt="20px" ml="24px">
        <Text fontWeight="700" fontSize="17px" color={theme.colors.mainText}>
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
      <Box
        mt="24px"
        px={24}
        flexDirection="row"
        justifyContent={'space-between'}>
        <RecipeCard
          onPress={() => navigation.navigate('DetailRecipe')}
          title={'Fıstıklı portakallı irmik helvası'}
          author={'Berkay Özdağ'}
        />
        <RecipeCard
          onPress={() => navigation.navigate('DetailRecipe')}
          title={'Fıstıklı portakallı irmik helvası'}
          author={'Berkay Özdağ'}
        />
      </Box>
    </Box>
  );
}
