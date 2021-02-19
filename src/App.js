import * as React from 'react';
import {ThemeProvider} from 'styled-components';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './navigation';
import theme from './utils/Theme';
import {StatusBar} from 'react-native';
import AuthContext, {AuthProvider} from './context/AuthContext';
import {Auth} from 'aws-amplify';

function AppContainer() {
  const {setLogged} = React.useContext(AuthContext);

  React.useEffect(() => {
    const getUser = async () => {
      //Uygulama ilk açıldığında Auth olan user var mı kontrol ediliyor.
      await Auth.currentAuthenticatedUser()
        .then((data) => {
          setLogged(true);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    getUser();
  }, [setLogged]);

  return <Navigation />;
}

function App() {
  StatusBar.setBarStyle('light-content', true);
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <AuthProvider>
          <AppContainer />
        </AuthProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
