import * as React from 'react';
import {ThemeProvider} from 'styled-components';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './navigation';
import theme from './utils/Theme';
import {StatusBar} from 'react-native';
function App() {
  StatusBar.setBarStyle('dark-content', true);
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Navigation/>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
export default App;
