import {Dimensions, StatusBar} from 'react-native';

const {height} = Dimensions.get('window');
const φ = (1 + Math.sqrt(5)) / 2;

const MIN_HEADER_HEIGHT = 64 + StatusBar.currentHeight;
const MAX_HEADER_HEIGHT = height * (1 - 1 / φ);
const HEADER_DELTA = MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT;

const space = [];

const sizes = {
  actionButton: 48,
};
const colors = {
  mainGreen: '#1FCC79',
  mainText: '#2E3E5C',
  mainGray: '#a6a9b7',
  lightGray: '#f2f3f8',
  secondaryText: '#9FA5C0',
  borderColor: '#D0DBEA',
  googleButtonColor: '#FF5842',
};

const radii = {
  button: 7,
  input: 7,
  full: 9999,
};

export default {
  space,
  radii,
  colors,
  sizes,
  MIN_HEADER_HEIGHT,
  MAX_HEADER_HEIGHT,
  HEADER_DELTA,
};
