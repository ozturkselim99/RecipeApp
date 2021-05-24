import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import HeaderImage from './HeaderImage';
import Content, {defaultTabs} from './Content';
import Animated from 'react-native-reanimated';
import Header from './Header';
import {useValue, onScrollEvent} from 'react-native-redash/lib/module/v1';
import Text from '../../components/Text';
import Button from '../../components/Button';
import Modal from 'react-native-modal';
import theme from '../../utils/Theme';
import Input from '../../components/Input';
import {X} from '../../components/icons';
import Comments from '../Comments';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 4,
    borderTopLeftRadius: theme.radii.input,
    borderTopRightRadius: theme.radii.input,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});

export default () => {
  const scrollView = React.useRef(null);
  const [tabs, setTabs] = useState(defaultTabs);

  const [isModalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
          toggleModal={toggleModal}
          onMeasurement={(index, tab) => {
            tabs[index] = tab;
            setTabs([...tabs]);
          }}
        />
      </Animated.ScrollView>
      <Header {...{tabs, y, scrollView}} />
      <Modal
        isVisible={isModalVisible}
        onSwipeComplete={toggleModal}
        useNativeDriverForBackdrop
        onBackdropPress={toggleModal}
        swipeDirection={['down']}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}>
        <View style={styles.content}>
          <Button
            onPress={toggleModal}
            position={'absolute'}
            top={10}
            right={10}>
            <X color={theme.colors.mainText} />
          </Button>
          <Comments />
        </View>
      </Modal>
    </View>
  );
};
