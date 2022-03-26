import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainStack from './navigators/MainStack';
import { navigationRef } from './navigators/navigationRef';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
