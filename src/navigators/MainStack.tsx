import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Fragment } from 'react';

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
      <Stack.Screen name="homeTab" key="homeTab" component={GhostScreen} />
      <Stack.Screen
        name="sessionDetails"
        key="sessionDetails"
        component={GhostScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
