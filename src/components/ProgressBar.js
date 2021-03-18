import React from 'react';
import Box from './Box';
import {Animated, Easing, StyleSheet, View} from 'react-native';
import Text from '../components/Text';
import * as Progress from 'react-native-progress';
import Button from './Button';

export default function ProgressBar(props) {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    if (
      props.index === props.activeStoryIndex &&
      progress <= 1 &&
      !props.isPause
    ) {
      console.log(progress);
      //Kullanıcı geçişlerinde, kullanıcının son hikayesinden sonra interval devam ediyor.
      const interval = setInterval(() => {
        if (progress === 1) {
          clearInterval(interval);
          props.nextStory();
        } else {
          setProgress(progress + 0.2);
        }
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [progress, props, props.activeStoryIndex, props.index]);
  return (
    <Progress.Bar
      style={{flexGrow: 1, marginRight: 3}}
      progress={progress}
      unfilledColor="#555"
      height={3}
      borderWidth={0}
      borderRadius={0}
      width={null}
      color="white"
    />
  );
}
