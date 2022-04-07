import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './router';
// import NetworkLogger from 'react-native-network-logger';

const App = () => {
  return (
    <NavigationContainer>
      {/* <NetworkLogger /> */}
      <Router />
    </NavigationContainer>
  );
};

export default App;
