import Box from '../components/Box';
import React from 'react';
import FormInput from './FormInput';
import theme from '../utils/Theme';
import Button from './Button';
import Text from './Text';
import {Search} from './icons';
function SearchIcon() {
  return <Search stroke={theme.colors.mainText} />;
}

export default function SearchBox({onChangeText}) {
  const [isFocus, setIsFocus] = React.useState(false);
  const searchInputRef = React.useRef(null);
  return (
    <Box flexDirection={'row'} justifyContent={'space-between'}>
      <Box flex={1}>
        <FormInput
          inputRef={searchInputRef}
          LeftIcon={SearchIcon}
          placeholderText={'Takipçilerde ara'}
          backgroundColor={theme.colors.mainGray}
          clearButtonMode="always"
          onChangeText={onChangeText}
          onFocus={() => setIsFocus(true)}
        />
      </Box>
      {isFocus && (
        <Button
          onPress={() => {
            setIsFocus(false);
            searchInputRef.current.blur();
          }}
          ml={10}>
          <Text>Cancel</Text>
        </Button>
      )}
    </Box>
  );
}
