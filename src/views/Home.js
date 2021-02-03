import * as React from 'react';
import {Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Box from '../components/Box';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import {ChevronLeft, Search, Filter} from '../components/icons';
import theme from '../utils/Theme';
import Animated, {Easing} from 'react-native-reanimated';
import HomeSearch from '../components/HomeSearch';

function ChevronLeftIcon() {
  return <ChevronLeft stroke={theme.colors.mainText} />;
}

function SearchIcon() {
  return <Search stroke={theme.colors.mainText} />;
}

function FilterIcon() {
  return <Filter stroke={theme.colors.mainText} />;
}

export default function HomeScreen() {
  const [keyword, setKeyword] = React.useState('');

  return <></>;
}
