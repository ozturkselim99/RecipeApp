// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import Navigation from './navigation';
import theme from './utils/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
