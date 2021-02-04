import * as React from 'react';
import Box from '../components/Box';
import Text from '../components/Text';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList} from 'react-native';
import StoryContainer from '../components/StoryContainer';

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

  return (
    <Box as={SafeAreaView}>
      <FlatList
        ListHeaderComponent={() => (
          <StoryContainer stories={stories} onStoryPress={this.onStoryPress} />
        )}
        data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}]}
      />
    </Box>
  );
}
