import Box from '../components/Box';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import NotificationFollow from '../components/NotificationFollow';
import fuku from '../img/fuku.jpg';
import FormInput from '../components/FormInput';
import theme from '../utils/Theme';
import {Search} from '../components/icons';

function SearchIcon() {
  return <Search stroke={theme.colors.mainText} />;
}

export default function FollowingScreen() {
  const [isFocus, setIsFocus] = React.useState(false);
  const searchInputRef = React.useRef(null);

  return (
    <Box as={SafeAreaView} pt="24px" px={'24px'} bg={'white'} flex={1}>
      <ScrollView>
        <Box flex={1}>
          <FormInput
            inputRef={searchInputRef}
            LeftIcon={SearchIcon}
            placeholderText={'Takipçilerde ara'}
            backgroundColor={theme.colors.mainGray}
            clearButtonMode="always"
            onFocus={() => setIsFocus(true)}
          />
        </Box>
        <NotificationFollow
          userName={'Furkan Ergün'}
          imageAvatar={fuku}
          followText={'Furkan Ergün'}
          buttonText={'Kaldır'}
        />
        <NotificationFollow
          userName={'Furkan Ergün'}
          imageAvatar={fuku}
          followText={'Furkan Ergün'}
          buttonText={'Kaldır'}
        />
      </ScrollView>
    </Box>
  );
}
