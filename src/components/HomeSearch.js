import * as React from 'react';
import {TouchableHighlight} from 'react-native';
import {Search} from './icons';
import theme from '../utils/Theme';
import Box from './Box';
import Text from './Text';

function SearchIcon() {
  return <Search stroke={theme.colors.mainText} />;
}

export default function HomeSearch(props) {
  return (
    <Box
      as={TouchableHighlight}
      activeOpacity={1}
      underlayColor={'transparent'}
      {...props}>
      <Box
        bg={theme.colors.mainGray}
        borderRadius={theme.radii.input}
        height={56}>
        <Box position={'absolute'} top={16} left={24}>
          <SearchIcon />
        </Box>
        <Box position={'absolute'} top={18} left={56}>
          <Text color={theme.colors.secondaryText} fontSize={16}>
            Search
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
