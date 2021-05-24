import React from 'react';
import {StyleSheet} from 'react-native';
import Box from '../components/Box';
import Text from '../components/Text';
import theme from '../utils/Theme';
import {Image} from 'react-native';
import {CornerUpLeft, Heart, Star} from '../components/icons';
import Button from '../components/Button';
import {useTiming} from 'react-native-redash';

const styles = StyleSheet.create({
  userImage: {
    width: 35,
    height: 35,
    borderRadius: theme.radii.full,
  },
});

function Comment() {
  return (
    <Box>
      <Box flexDirection={'row'}>
        <Image
          source={{
            uri: 'https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=14a95b5026c1567b823629ba35c40aa0',
          }}
          style={styles.userImage}
        />
        <Box>
          <Text
            fontWeight={'bold'}
            color={theme.colors.mainText}
            fontSize={13}
            ml={5}
            mt={3}>
            Furkan Ergün
          </Text>
          <Box flexDirection={'row'}>
            <Star fill={'#f3a83b'} stroke={''} height={15} />
            <Text fontSize={13} color={theme.colors.mainGray}>
              4/5 15 minutes ago
            </Text>
          </Box>
        </Box>
      </Box>
      <Box mt={8}>
        <Text color={theme.colors.mainText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu
          malesuada ipsum, vitae mollis purus. Cras eget elementum tellus, ut
          sodales lacus. In rhoncus, enim non dapibus mattis, sem libero laoreet
          nulla, vehicula cursus sapien diam ac ipsum. Duis porta cursus massa,
          nec consectetur nunc facilisis non.
        </Text>
        <Box flexDirection={'row'} alignItems={'center'}>
          <Button width={23} justifyContent={'flex-start'}>
            <Heart stroke={theme.colors.mainGray} />
            <Text fontSize={13} color={theme.colors.mainGray}>
              {' '}
              0
            </Text>
          </Button>

          <Button width={70} justifyContent={'flex-start'} ml={15}>
            <CornerUpLeft stroke={theme.colors.mainGray} />
            <Text fontSize={13} color={theme.colors.mainGray}>
              {' '}
              Reply
            </Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default function Comments() {
  return (
    <Box>
      <Text
        fontSize="30px"
        fontWeight={700}
        color={theme.colors.mainText}
        mt={12}
        mb={20}>
        Comments
      </Text>
      <Comment />
    </Box>
  );
}
