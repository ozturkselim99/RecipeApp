import * as React from 'react';
import Box from '../components/Box';
import Text from '../components/Text';
import {SafeAreaView} from 'react-native-safe-area-context';
import FormInput from '../components/FormInput';
import {Filter, Search, Clock, ArrowUpLeft} from '../components/icons';
import theme from '../utils/Theme';
import Button from '../components/Button';
import TagSelector from '../components/TagSelector';
import RecipeFilter from '../components/RecipeFilter';
import HomeSearch from '../components/HomeSearch';
import {ScrollView} from 'react-native';

function SearchIcon() {
  return <Search stroke={theme.colors.mainText} />;
}

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

export default function SearchScreen() {
  const [isFocus, setIsFocus] = React.useState(false);
  const searchInputRef = React.useRef(null);
  const modalizeRef = React.useRef(null);

  const onModalOpen = () => {
    modalizeRef.current?.open();
  };
  const onModalClose = () => {
    modalizeRef.current?.close();
  };

  return (
    <Box as={SafeAreaView} bg={'white'} flex={1}>
      <Box px={24} flexDirection={'row'} justifyContent={'space-between'}>
        <Box flex={1}>
          <FormInput
            inputRef={searchInputRef}
            LeftIcon={SearchIcon}
            placeholderText={'Search'}
            backgroundColor={theme.colors.mainGray}
            clearButtonMode="always"
            onFocus={() => setIsFocus(true)}
          />
        </Box>
        {isFocus && (
          <Button
            onPress={() => {
              setIsFocus(false);
              searchInputRef.current.blur();
            }}
            ml={10}>
            <Text>Cancel</Text>
          </Button>
        )}
        <Button onPress={onModalOpen} ml={24}>
          <Filter stroke={theme.colors.mainText} />
        </Button>
      </Box>
      <Box mt={24} height={8} bg={theme.colors.mainGray} />
      <Box px={24} mt={12}>
        <Box flexDirection={'row'} alignItems={'center'} py={12}>
          <Box>
            <Clock color={theme.colors.secondaryText} />
          </Box>
          <Box ml={17} flex={1}>
            <Text color={theme.colors.mainText} fontSize={17}>
              Example 1
            </Text>
          </Box>
          <Box>
            <ArrowUpLeft color={theme.colors.secondaryText} />
          </Box>
        </Box>
        <Box flexDirection={'row'} alignItems={'center'} py={12}>
          <Box>
            <Clock color={theme.colors.secondaryText} />
          </Box>
          <Box ml={17} flex={1}>
            <Text color={theme.colors.mainText} fontSize={17}>
              Example 1
            </Text>
          </Box>
          <Box>
            <ArrowUpLeft color={theme.colors.secondaryText} />
          </Box>
        </Box>
        <Box flexDirection={'row'} alignItems={'center'} py={12}>
          <Box>
            <Clock color={theme.colors.secondaryText} />
          </Box>
          <Box ml={17} flex={1}>
            <Text color={theme.colors.mainText} fontSize={17}>
              Example 1
            </Text>
          </Box>
          <Box>
            <ArrowUpLeft color={theme.colors.secondaryText} />
          </Box>
        </Box>
      </Box>
      <Box mt={24} height={8} bg={theme.colors.mainGray} />
      <Box py={24} px={24}>
        <Box>
          <Text fontSize={17} color={theme.colors.mainText} fontWeight={700}>
            Search suggestions
          </Text>
        </Box>

        <Box mt={24}>
          <TagSelector
            tags={tags}
            multiple
            onChange={(selected) => console.log(selected)}
          />
        </Box>
      </Box>
      <RecipeFilter modalRef={modalizeRef} />
    </Box>
  );
}
