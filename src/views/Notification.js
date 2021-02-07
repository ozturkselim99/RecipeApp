import * as React from 'react';
import Box from '../components/Box';
import Text from '../components/Text';
import theme from '../utils/Theme';
import {FlatList} from 'react-native';
import images from '../res/images';
import {Image} from 'react-native';
import {borderRadius} from 'styled-system';
import Button from '../components/Button';
import NotificationLike from '../components/NotificationLike';
import NotificationFollow from '../components/NotificationFollow';

export default function NotificationScreen() {
  return (
    <Box paddingTop={'26px'} pl="24px" pr="24px" bg={'white'}>
      {/*New texti*/}
      <Box>
        <Text
          fontSize="17px"
          fontWeight={700}
          color={theme.colors.mainText}
          mt="12px">
          New
        </Text>
      </Box>
      <NotificationFollow />
      {/*Today texti*/}
      <Box>
        <Text
          fontSize="17px"
          fontWeight={700}
          color={theme.colors.mainText}
          mt="17px">
          Today
        </Text>
      </Box>
      <NotificationLike />
      <NotificationFollow />
      <NotificationLike />
      {/*Yesterday texti*/}
      <Box>
        <Text
          fontSize="17px"
          fontWeight={700}
          color={theme.colors.mainText}
          mt="12px">
          Yesterday
        </Text>
      </Box>
      <NotificationFollow />
      <NotificationFollow />
      {/*Boş box*/}
      <Box bg="white" mt="70px" />
    </Box>
  );
}
