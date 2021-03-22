import React, {useState, useEffect} from 'react';
import Box from './Box';
import {Image} from 'react-native';
import Text from './Text';
import theme from '../utils/Theme';
import Button from './Button';

export default function Notification(props) {
  const {user, time, type, recipe} = props.item;
  return (
    <Box flexDirection="row" justifyContent={'space-between'}>
      <Image
        source={user.avatar}
        style={{width: 48, height: 48, borderRadius: theme.radii.full}}
      />
      <Box ml="16px" flex={1}>
        <Text
          fontSize="15px"
          fontWeight={'bold'}
          color={theme.colors.mainText}
          lineHeight={'20px'}>
          {user.fullname}
          <Text fontSize="15px" fontWeight={500} color={theme.colors.mainText}>
            {' '}
            {type === 'follow' && 'started following you.'}
            {type === 'like' && 'liked your'}
          </Text>

          {type === 'like' && (
            <Text
              fontSize="15px"
              fontWeight={'bold'}
              color={theme.colors.mainText}>
              {' '}
              {recipe.title}
              <Text
                fontSize="15px"
                fontWeight={500}
                color={theme.colors.mainText}>
                {' '}
                recipe.
              </Text>
            </Text>
          )}

          <Text
            fontSize="15px"
            fontWeight={500}
            color={theme.colors.secondaryText}>
            {' '}
            {time}
          </Text>
        </Text>
      </Box>

      {type === 'follow' && (
        <Button
          bg={theme.colors.mainGreen}
          borderRadius={theme.radii.button}
          ml={20}
          px={24}
          height={39}
          width={87}>
          <Text fontSize={12} fontWeight={500} color={'white'}>
            Follow
          </Text>
        </Button>
      )}

      {type === 'like' && (
        <Button ml={20}>
          <Image
            source={recipe.image}
            style={{
              width: 50,
              height: 50,
              marginTop: -7,
              borderRadius: theme.radii.input,
            }}
          />
        </Button>
      )}
    </Box>
  );
}
