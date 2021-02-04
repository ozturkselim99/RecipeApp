import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import images from '../res/images';
import colors from '../res/colors';
import Box from './Box';
import theme from '../utils/Theme';
import Button from './Button';

const ProfilePicture = ({item, onStoryPress, size}) => {
  const params = {
    size: size || 64,
    get borderSize() {
      return (this.size * 6) / 100;
    },
    get innerBorderSize() {
      return (this.size * 3) / 100;
    },
    get innerCircleSize() {
      return this.size - this.borderSize;
    },
    get profileImgBorderSize() {
      return item.hasStory ? this.innerBorderSize : 0;
    },
    get notificationSize() {
      return this.size / 4;
    },
    get notificationPositionTop() {
      return (this.size * 1) / 12;
    },
    get notificationPositionStart() {
      return (this.size * 8) / 12;
    },
    get insertStorySize() {
      return this.size / 3;
    },
    get insertStoryIconSize() {
      return this.size / 8;
    },
    get insertStoryBorderWidth() {
      return this.size / 40;
    },
    get insertStoryTop() {
      return (this.size * 8) / 12;
    },
    get insertStoryStart() {
      return (this.size * 8) / 12;
    },
  };

  return (
    <Button alignItems="center" justifyContent="center" onPress={onStoryPress}>
      <Box
        bg={theme.colors.mainGreen}
        borderRadius={theme.radii.full}
        size={params.size + 1}
        alignItems="center"
        justifyContent="center">
        <Image source={{uri: item.src}} style={styles(params).profileImg} />
      </Box>

      {!item.hasStory && item.isStoryInsertable && (
        <Box style={styles(params).insertIconContainer}>
          <Image
            source={images.add_story}
            style={styles(params).insertIcon}
            resizeMode="contain"
          />
        </Box>
      )}
      {item.notificationCount && (
        <Box style={styles(params).notificationContainer} />
      )}
    </Button>
  );
};

const styles = (params) =>
  StyleSheet.create({
    profileImg: {
      width: params.innerCircleSize,
      height: params.innerCircleSize,
      borderRadius: params.innerCircleSize,
      borderWidth: params.profileImgBorderSize,
      borderColor: 'white',
    },
    insertIconContainer: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      top: params.insertStoryTop,
      start: params.insertStoryStart,
      backgroundColor: theme.colors.mainText,
      width: params.insertStorySize,
      height: params.insertStorySize,
      borderRadius: params.insertStorySize,
      borderWidth: params.insertStoryBorderWidth,
      borderColor: 'white',
    },
    insertIcon: {
      width: params.insertStoryIconSize,
      height: params.insertStoryIconSize,
    },
    notificationContainer: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      top: params.notificationPositionTop,
      start: params.notificationPositionStart,
      backgroundColor: colors.storyNotification,
      width: params.notificationSize,
      height: params.notificationSize,
      borderRadius: params.notificationSize,
    },
    notificationText: {
      fontSize: params.notificationSize / 1.5,
      color: colors.text,
      fontWeight: 'bold',
    },
  });

export default ProfilePicture;
