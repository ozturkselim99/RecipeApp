import * as React from 'react';
import Box from '../components/Box';
import Text from '../components/Text';
import {ScrollView, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import StoryContainer from '../components/StoryContainer';
import theme from '../utils/Theme';
import RecipeCard from '../components/RecipeCard';
import TagSelector from '../components/TagSelector';
import sampleData from '../data.js';

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

  const onStoryPress = () => {};
  return (
    <Box as={SafeAreaView} bg={'white'} flex={1}>
      <Box>
        <FlatList
          ListHeaderComponent={() => (
            <StoryContainer
              stories={sampleData.stories}
              onStoryPress={onStoryPress}
            />
          )}
          data={[
            {key: 'a'},
            {key: 'b'},
            {key: 'c'},
            {key: 'd'},
            {key: 'e'},
            {key: 'f'},
          ]}
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
        as={FlatList}
        px={24}
        mt={18}
        data={sampleData.recipes}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        ItemSeparatorComponent={() => <Box size={30} />}
        renderItem={({item}) => (
          <RecipeCard
            item={item}
            onPress={() =>
              navigation.navigate('DetailRecipe', {
                itemId: item.id,
              })
            }
          />
        )}
        numColumns={2}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
}
