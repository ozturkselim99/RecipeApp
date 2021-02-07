import Box from './Box';
import {Image} from 'react-native';
import images from '../res/images';
import Text from './Text';
import theme from '../utils/Theme';
import Button from './Button';
import * as React from 'react';

export default function NotificationFollow() {
  return (
    <Box flexDirection="row" mt="24px">
      {/*Avatar*/}
      <Box>
        <Image
          source={images.zafer}
          style={{width: 48, height: 48, borderRadius: 9999}}
        />
      </Box>
      {/*Textleri kapsayan box*/}
      <Box ml="16px" mr={40}>
        <Box>
          <Text fontSize="17px" fontWeight={700} color={theme.colors.mainText}>
            Dean Winchester
          </Text>
        </Box>
        <Box>
          <Text
            fontSize="17px"
            fontWeight={500}
            color={theme.colors.secondaryText}
            mt="3px">
            now following you ・ 1h
          </Text>
        </Box>
      </Box>
      {/*Button*/}
      <Box>
        <Button
          bg={theme.colors.mainGreen}
          width="87px"
          height="39px"
          py={19}
          borderRadius={theme.radii.button}>
          <Text fontSize={12} fontWeight={500} color="white">
            Follow
          </Text>
        </Button>
      </Box>
    </Box>
  );
}
