import Box from './Box';
import {Image} from 'react-native';
import Text from './Text';
import theme from '../utils/Theme';
import Button from './Button';
import * as React from 'react';
import {S3Image} from 'aws-amplify-react-native';

export default function FollowList({item}) {
  return (
    <Box flexDirection="row" mt="24px" justifyContent={'space-between'}>
      <S3Image
        imgKey={item.avatar}
        resizeMode="contain"
        style={{width: 48, height: 48, borderRadius: theme.radii.full}}
      />
      <Box ml="16px" flex={1}>
        <Text fontSize="15px" fontWeight={700} color={theme.colors.mainText}>
          {item.fullname}
        </Text>
        <Text
          fontSize="12px"
          fontWeight={500}
          color={theme.colors.secondaryText}
          mt="3px">
          {item.fullname}
        </Text>
      </Box>
      <Button
        bg={theme.colors.mainGreen}
        borderRadius={theme.radii.button}
        px={24}
        height={40}
        >
        <Text
          fontSize={12}
          fontWeight={500}
          color={'white'}
          alignItems="center">
          Takip Et
        </Text>
      </Button>
    </Box>
  );
}