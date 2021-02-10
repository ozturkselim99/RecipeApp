import React from 'react';
import ProfilePicture from './ProfilePicture';
import Box from './Box';
import Text from './Text';
import theme from '../utils/Theme';

const StoryListItem = ({item, onStoryPress}) => {
  return (
    <Box flex={1} mr={15} alignItems="center">
      <ProfilePicture item={item} onStoryPress={onStoryPress} />
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
