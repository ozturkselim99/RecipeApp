import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet} from 'react-native';
import ProgressBar from './ProgressBar';
import Box from './Box';

const ProgressArray = (props) => {
  return (
    <Box flexDirection="row" justifyContent="space-between">
      {props.length.map((i, index) => (
        <ProgressBar index={index} activeStoryIndex={props.activeStoryIndex} />
      ))}
    </Box>
  );
};

export default ProgressArray;
