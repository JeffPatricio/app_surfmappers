import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Fragment } from 'react';
import Album from '../pages/Album';
import ChangeLanguage from '../pages/ChangeLanguage';
import HomeTab from './HomeTab';

const Stack = createNativeStackNavigator();

const GhostScreen = () => {
  return <Fragment />;
};

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="homeTab"
    >
      <Stack.Screen name="album" key="album" component={Album} />
      <Stack.Screen
        name="changeLanguage"
        key="changeLanguage"
        component={ChangeLanguage}
      />
      <Stack.Screen name="homeTab" key="homeTab" component={HomeTab} />
      <Stack.Screen
        name="sessionDetails"
        key="sessionDetails"
        component={GhostScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
