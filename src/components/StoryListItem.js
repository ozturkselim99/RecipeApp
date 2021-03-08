import React from 'react';
import ProfilePicture from './ProfilePicture';
import Box from './Box';
import Button from './Button';
import Text from './Text';
import theme from '../utils/Theme';
import {useNavigation} from '@react-navigation/native';

const StoryListItem = ({item, onStoryPress}) => {
  const navigation = useNavigation();
  return (
    <Box flex={1} mr={15} alignItems="center">
      <ProfilePicture
        item={item}
        onStoryPress={() => {
          navigation.navigate('Story', {story: item});
        }}
      />
      <Text
        color={theme.colors.mainText}
        mt="5px"
        fontSize="12px"
        fontWeight="normal">
        {' '}
        {item && item.username}
      </Text>
    </Box>
  );
};

export default StoryListItem;
