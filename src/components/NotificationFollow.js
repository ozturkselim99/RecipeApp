import Box from './Box';
import {Image} from 'react-native';
import Text from './Text';
import theme from '../utils/Theme';
import Button from './Button';
import * as React from 'react';

export default function NotificationFollow({
  userName,
  imageAvatar,
  followText,
}) {
  return (
    <Box flexDirection="row" mt="24px" justifyContent={'space-between'}>
      <Image
        source={imageAvatar}
        style={{width: 48, height: 48, borderRadius: theme.radii.full}}
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
          {followText}
        </Text>
      </Box>
      <Button
        bg={theme.colors.mainGreen}
        borderRadius={theme.radii.button}
        px={24}
        height={39}
        width={87}>
        <Text fontSize={12} fontWeight={500} color={'white'}>
          Follow
        </Text>
      </Button>
    </Box>
  );
}
