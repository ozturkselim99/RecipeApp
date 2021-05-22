import React from 'react';
import Button from './Button';
import {Search, Home, User, Plus, Bell} from './icons';
import Box from './Box';

import theme from '../utils/Theme';
import AuthContext from '../context/AuthContext';

function TabBar({state, descriptors, navigation}) {
  const {userId} = React.useContext(AuthContext);

  return (
    <Box
      bg="white"
      flexDirection="row"
      pb={10}
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
              navigation.navigate('Auth', 'Profile');
            } else {
              navigation.navigate(route.name);
            }
          }
        };

        return label === 'Upload' ? (
          // search button
          <Box key={label} p={14} mt={-30} borderRadius="full">
            <Button
              size={56}
              bg={theme.colors.mainGreen}
              borderRadius="full"
              onPress={onPress}>
              <Plus stroke="white" />
            </Button>
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
              </>
            )}
            {label === 'Notifications' && (
              <>
                <Bell
                  color={
                    isFocused
                      ? theme.colors.mainGreen
                      : theme.colors.secondaryText
                  }
                />
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
              </>
            )}
          </Button>
        );
      })}
    </Box>
  );
}

export default TabBar;
