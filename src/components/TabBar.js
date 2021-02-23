import React from 'react';
import Button from './Button';
import {Search, Home, Bell, Plus, User} from './icons';
import Box from './Box';
import Text from './Text';

import theme from '../utils/Theme';
import AuthContext from '../context/AuthContext';

function TabBar({state, descriptors, navigation}) {
  const {userId} = React.useContext(AuthContext);

  return (
    <Box
      bg="white"
      flexDirection="row"
      style={{
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 20,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            if (route.name === 'Profile') {
              navigation.navigate(route.name, {id: userId});
            } else {
              navigation.navigate(route.name);
            }
          }
        };

        return label === 'Upload' ? (
          // search button
          <Box key={label} p={14} mt={-36} borderRadius="full">
            <Button
              size={56}
              bg={theme.colors.mainGreen}
              borderRadius="full"
              onPress={onPress}>
              <Plus stroke="white" />
            </Button>
            <Text
              color={
                isFocused ? theme.colors.mainGreen : theme.colors.secondaryText
              }
              mt={8}
              textAlign={'center'}
              fontSize={12}>
              {label}
            </Text>
          </Box>
        ) : (
          // tab-button
          <Button
            key={label}
            pt={6}
            flexDirection="column"
            height={56}
            flex={1}
            onPress={onPress}>
            {label === 'Home' && (
              <>
                <Home
                  color={
                    isFocused
                      ? theme.colors.mainGreen
                      : theme.colors.secondaryText
                  }
                />
                <Text
                  color={
                    isFocused
                      ? theme.colors.mainGreen
                      : theme.colors.secondaryText
                  }
                  mt={2}
                  textAlign={'center'}
                  fontSize={12}>
                  {label}
                </Text>
              </>
            )}
            {label === 'Notification' && (
              <>
                <Bell
                  color={
                    isFocused
                      ? theme.colors.mainGreen
                      : theme.colors.secondaryText
                  }
                />
                <Text
                  color={
                    isFocused
                      ? theme.colors.mainGreen
                      : theme.colors.secondaryText
                  }
                  mt={2}
                  textAlign={'center'}
                  fontSize={12}>
                  {label}
                </Text>
              </>
            )}
            {label === 'Profile' && (
              <>
                <User
                  color={
                    isFocused
                      ? theme.colors.mainGreen
                      : theme.colors.secondaryText
                  }
                />
                <Text
                  color={
                    isFocused
                      ? theme.colors.mainGreen
                      : theme.colors.secondaryText
                  }
                  mt={2}
                  textAlign={'center'}
                  fontSize={12}>
                  {label}
                </Text>
              </>
            )}
            {label === 'Search' && (
              <>
                <Search
                  color={
                    isFocused
                      ? theme.colors.mainGreen
                      : theme.colors.secondaryText
                  }
                />
                <Text
                  color={
                    isFocused
                      ? theme.colors.mainGreen
                      : theme.colors.secondaryText
                  }
                  mt={2}
                  textAlign={'center'}
                  fontSize={12}>
                  {label}
                </Text>
              </>
            )}
          </Button>
        );
      })}
    </Box>
  );
}

export default TabBar;
