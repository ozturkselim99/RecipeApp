import * as React from 'react';
import Box from '../components/Box';
import Text from '../components/Text';
import theme from '../utils/Theme';
import NotificationLike from '../components/NotificationLike';
import NotificationFollow from '../components/NotificationFollow';
import tehlike from '../img/Tehlike2.jpg';
import qral from '../img/qral.jpg';
import selo from '../img/selo.jpg';
import fuku from '../img/fuku.jpg';
import suslu from '../img/susluSelo.jpeg';
import durum from '../img/durum.jpeg';
import brokoli from '../img/brokoli.jpeg';
import masum from '../img/masum.jpeg';
import crazy from '../img/crazy.jpg';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function NotificationScreen() {
  return (
    <Box as={SafeAreaView} pt="12px" px={'24px'} bg={'white'} flex={1}>
      <Text
        fontSize="17px"
        fontWeight={700}
        color={theme.colors.mainText}
        mt="12px">
        New
      </Text>
      <NotificationFollow
        userName={'Furkan Ergün'}
        imageAvatar={fuku}
        followText={'now following you ・ 46m'}
        buttonText={'Follow'}
      />
      <Box>
        <Text
          fontSize="17px"
          fontWeight={700}
          color={theme.colors.mainText}
          mt="17px">
          Today
        </Text>
      </Box>
      <NotificationLike
        userName={'Şopar Selo'}
        likedText={'liked your recipe ・ 53 min'}
        likeAvatar={suslu}
        likedFoto={durum}
      />
      <NotificationFollow
        userName={'Ahmet Selim Öztürk'}
        imageAvatar={selo}
        followText={'now following you ・ 18m'}
        buttonText={'Follow'}
      />
      <NotificationLike
        userName={'Crazy Girl'}
        likedText={'liked your recipe ・ 61 min'}
        likedFoto={brokoli}
        likeAvatar={crazy}
      />
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
      <NotificationFollow
        userName={'Berkay Kral'}
        imageAvatar={qral}
        followText={'now following you ・ 23m'}
        buttonText={'Follow'}
      />
      <NotificationFollow
        userName={'Davud Samed Tombul'}
        imageAvatar={tehlike}
        followText={'now following you ・ 28m'}
        buttonText={'Follow'}
      />
    </Box>
  );
}
