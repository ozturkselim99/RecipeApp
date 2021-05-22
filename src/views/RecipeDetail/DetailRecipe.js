import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import HeaderImage from './HeaderImage';
import Content, {defaultTabs} from './Content';
import Animated from 'react-native-reanimated';
import Header from './Header';
import {useValue, onScrollEvent} from 'react-native-redash/lib/module/v1';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default () => {
  const scrollView = React.useRef(null);
  const [tabs, setTabs] = useState(defaultTabs);
  const y = useValue(0);
  return (
    <View style={styles.container}>
      <HeaderImage {...{y}} />
      <Animated.ScrollView
        ref={scrollView}
        style={StyleSheet.absoluteFill}
        onScroll={onScrollEvent({y})}
        scrollEventThrottle={1}>
        <Content
          onMeasurement={(index, tab) => {
            tabs[index] = tab;
            setTabs([...tabs]);
          }}
        />
      </Animated.ScrollView>
      <Header {...{tabs, y, scrollView}} />
    </View>
  );
};
