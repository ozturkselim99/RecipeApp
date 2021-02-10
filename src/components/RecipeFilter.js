import React, {useRef} from 'react';
import {ScrollView} from 'react-native';
import theme from '../utils/Theme';
import Box from './Box';
import Text from './Text';
import Button from '../components/Button';
import TagSelector from './TagSelector';
import {Filter} from './icons';
import {Modalize} from 'react-native-modalize';
import {TouchableOpacity} from 'react-native-gesture-handler';
function RecipeFilter() {
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
  const modalizeRef = useRef(null);
  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const onClose = () => {
    modalizeRef.current?.close();
  };
  return (
    <>
      <Button onPress={onOpen} position="absolute" top={32} right={24}>
        <Filter stroke={theme.colors.mainText} />
      </Button>
      <Modalize ref={modalizeRef} snapPoint={460} handlePosition={'inside'}>
        <Text
          fontWeight={700}
          fontSize={17}
          color={theme.colors.mainText}
          textAlign={'center'}
          mt="32px">
          Add a Filter
        </Text>
        <Box flexDirection="column" px="24px">
          <Text
            fontWeight={700}
            fontSize={17}
            color={theme.colors.mainText}
            mt="32px">
            Category
          </Text>
          <Box as={ScrollView} horizontal flexDirection="row" mt="16px">
            <TagSelector
              tags={tags}
              multiple
              onChange={(selected) => console.log(selected)}
            />
          </Box>
          <Text
            fontWeight={700}
            fontSize="17px"
            color={theme.colors.mainText}
            mt="32px">
            Cooking Duration
            <Text
              fontWeight={700}
              fontSize="17px"
              color={theme.colors.secondaryText}>
              <Text> </Text>
              (in minutes)
            </Text>
          </Text>
          <Box flexDirection="row" justifyContent="space-between" mt="16px">
            <Text
              fontWeight={700}
              fontSize="15px"
              color={theme.colors.mainGreen}>
              {'<10'}
            </Text>
            <Text
              fontWeight={700}
              fontSize="15px"
              color={theme.colors.mainGreen}>
              {'30'}
            </Text>
            <Text
              fontWeight={700}
              fontSize="15px"
              color={theme.colors.mainGreen}>
              {'>60'}
            </Text>
          </Box>
          <Box
            mt={24}
            height={8}
            bg={theme.colors.mainGreen}
            borderRadius={theme.radii.button}
          />
          <Box flexDirection="row" mt="52px">
            <Button
              onPress={onClose}
              bg={theme.colors.mainGray}
              py="19px"
              borderRadius={theme.radii.button}
              flexGrow={1}>
              <Text
                fontWeight={700}
                fontSize="15px"
                color={theme.colors.mainText}>
                Cancel
              </Text>
            </Button>
            <Button
              bg={theme.colors.mainGreen}
              py="19px"
              ml="15px"
              borderRadius={theme.radii.button}
              flexGrow={1}>
              <Text fontWeight={700} fontSize="15px" color="white">
                Done
              </Text>
            </Button>
          </Box>
        </Box>
      </Modalize>
    </>
  );
}

export default RecipeFilter;
