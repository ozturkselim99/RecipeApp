import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet} from 'react-native';
import ProgressBar from './ProgressBar';
import Box from './Box';

const ProgressArray = (props) => {
  return (
    <Box flexDirection="row" justifyContent="space-between">
      {props.length.map((i, index) => (
        <ProgressBar
          key={index}
          index={index}
          activeStoryIndex={props.activeStoryIndex}
          isPause={props.pause}
          progress={props.progress}
          nextStory={props.nextStory}
          prevStory={props.prevStory}
        />
      ))}
    </Box>
  );
};

export default ProgressArray;
