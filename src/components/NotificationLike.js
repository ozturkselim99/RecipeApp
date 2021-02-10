import React from 'react';
import Box from './Box';
import {Image} from 'react-native';
import Text from './Text';
import theme from '../utils/Theme';
import Button from './Button';

export default function NotificationLike({
  userName,
  likedText,
  likeAvatar,
  likedFoto,
}) {
  return (
    <Box flexDirection="row" mt="24px" justifyContent={'space-between'}>
      <Image
        source={likeAvatar}
        style={{width: 65, height: 65, borderRadius: 9999}}
      />
      <Box ml="16px" flex={1}>
        <Text fontSize="15px" fontWeight={700} color={theme.colors.mainText}>
          {userName}
        </Text>
        <Text
          fontSize="12px"
          fontWeight={500}
          color={theme.colors.secondaryText}
          mt="3px">
          {likedText}
        </Text>
      </Box>
      <Button>
        <Image
          source={likedFoto}
          style={{width: 64, height: 64, borderRadius: 16}}
        />
      </Button>
    </Box>
  );
}
