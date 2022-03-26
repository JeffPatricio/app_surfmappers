import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Fragment } from 'react';
import { Platform, StatusBar } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { ms, mvs } from 'react-native-size-matters';
import Bell from '../assets/bell.svg';
import Home from '../assets/house.svg';
import Map from '../assets/map.svg';
import SearchIcon from '../assets/search.svg';
import User from '../assets/user.svg';
import { translate } from '../locales';

const Tab = createBottomTabNavigator();

const GhostScreen = () => {
  return <Fragment />;
};

const HomeTab = () => {
  return (
    <Fragment>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />

      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#2587FE',
          tabBarInactiveTintColor: '#999',
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: Platform.select({
              ios: getBottomSpace() + mvs(50),
              android: mvs(55),
            }),
            backgroundColor: '#EEE',
            borderTopColor: '#DDD',
          },
          tabBarLabelStyle: {
            marginBottom: Platform.select({
              ios: mvs(5),
              android: mvs(3),
            }),
            fontSize: ms(10),
            fontWeight: 'bold',
          },
          tabBarIconStyle: {
            marginTop: mvs(8),
          },
          tabBarLabelPosition: 'below-icon',
        }}
        initialRouteName="feed"
      >
        <Tab.Screen
          name="feed"
          component={GhostScreen}
          options={{
            headerShown: false,
            tabBarLabel: translate('feed'),
            tabBarIcon: ({ color }) => (
              <Home height={mvs(24)} width={ms(24)} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="search"
          component={GhostScreen}
          options={{
            headerShown: false,
            tabBarLabel: translate('explore'),
            tabBarIcon: ({ color }) => (
              <SearchIcon height={mvs(24)} width={ms(24)} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="checkin"
          component={GhostScreen}
          options={{
            headerShown: false,
            tabBarLabel: translate('checkIn'),
            tabBarIcon: ({ color }) => (
              <Map height={mvs(24)} width={ms(24)} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="notifications"
          component={GhostScreen}
          options={{
            headerShown: false,
            tabBarLabel: translate('notifications'),
            tabBarIcon: ({ color }) => (
              <Bell height={mvs(24)} width={ms(24)} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="profile"
          component={GhostScreen}
          options={{
            headerShown: false,
            tabBarLabel: translate('profile'),
            tabBarIcon: ({ color }) => (
              <User height={mvs(24)} width={ms(24)} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </Fragment>
  );
};

export default HomeTab;
