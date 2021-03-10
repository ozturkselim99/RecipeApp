import React from 'react';
import Box from './Box';
import {Animated, Easing, StyleSheet, View} from 'react-native';
import Text from '../components/Text';

export default function ProgressBar(props) {
  return (
    <Box
      mr={3}
      bg={props.index <= props.activeStoryIndex ? 'white' : '#555'}
      height={3}
      flexGrow={1}
    />
  );
}
