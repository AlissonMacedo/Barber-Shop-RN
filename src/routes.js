import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Recovere from './pages/Recovere';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

import SelectProvider from '~/pages/New/SelectProvider';
import SelectDateTime from '~/pages/New/SelectDateTime';
import Confirm from '~/pages/New/Confirm';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Sign: createSwitchNavigator({
        SignIn,
        SignUp,
        Recovere,
      }),
      App: createBottomTabNavigator(
        {
          Dashboard,
          New: {
            screen: createStackNavigator(
              {
                SelectProvider,
                SelectDateTime,
                Confirm,
              },
              {
                defaultNavigationOptions: {
                  headerTransparent: false,
                  headerStyle: {
                    backgroundColor: '#000',
                  },
                  headerTintColor: '#FFF',
                  headerLeftContainerStyle: {
                    marginLeft: 20,
                  },
                },
              },
            ),
            navigationOptions: {
              tabBarVisible: false,
              tabBarLabel: 'Agendar',
              tabBarIcon: (
                <Icon
                  name="add-circle-outline"
                  size={30}
                  color="rgba(255, 255, 255, 0.6)"
                />
              ),
            },
          },
          Profile,
        },
        {
          resetOnBlur: true,
          tabBarOptions: {
            keyboardHidesTabBar: true,
            activeTintColor: '#FFF',
            inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
            style: {
              backgroundColor: 'rgb(37, 41, 46)',
            },
          },
        },
      ),
    },
    {
      initialRouteName: 'Sign',
    },
  ),
);

export default Routes;
