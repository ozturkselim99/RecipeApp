import React from 'react';
import Box from './Box';
import {Image} from 'react-native';
import img from '../img/mobilAvatar.png';
import Text from './Text';
import theme from '../utils/Theme';
import Button from './Button';
import img2 from '../img/manzara.jpg';

export default function NotificationLike({
  userName,
  likedText,
  likeAvatar,
  likedFoto,
}) {
  return (
    <Box flexDirection="row" mt="24px">
      {/*Yesterday foto*/}
      <Box>
        <Image
          source={likeAvatar}
          style={{width: 65, height: 65, borderRadius: 9999}}
        />
      </Box>
      {/*Textleri kapsayan box*/}
      <Box ml="16px">
        <Box width={170}>
          <Text fontSize="17px" fontWeight={700} color={theme.colors.mainText}>
            {userName}
          </Text>
        </Box>
        <Box>
          <Text
            fontSize="17px"
            fontWeight={500}
            color={theme.colors.secondaryText}
            mt="3px">
            {likedText}
          </Text>
        </Box>
      </Box>
      {/*New Button*/}
      <Box ml="30px">
        <Button>
          <Image
            source={likedFoto}
            style={{width: 64, height: 64, borderRadius: 16}}
          />
        </Button>
      </Box>
    </Box>
  );
}
