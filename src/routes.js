import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import SignIn from './pages/SignIn';
import Recovere from './pages/Recovere';

import SelectAccountType from './pages/NewAccount/SelectAccountType';
import SignUpBarber from './pages/NewAccount/SignUpBarber';
import SignUpClient from './pages/NewAccount/SignUpClient';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

import SelectBarber from '~/pages/New/SelectBarber';
import OverViewBarber from '~/pages/New/OverViewBarber';
import Local from '~/pages/Local';
import SelectProvider from '~/pages/New/SelectProvider';
import SelectHairStyle from '~/pages/New/SelectHairStyle';
import SelectDateTime from '~/pages/New/SelectDateTime';
import Confirm from '~/pages/New/Confirm';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Sign: createSwitchNavigator({
        SignIn,
        Recovere,
      }),
      CreateAccount: createStackNavigator(
        {
          SelectAccountType,
          SignUpBarber,
          SignUpClient,
        },
        {
          defaultNavigationOptions: {
            headerTransparent: false,
            headerStyle: {
              backgroundColor: 'rgb(37, 41, 46)',
            },
            headerTintColor: '#FFF',
            headerLeftContainerStyle: {
              marginLeft: 20,
            },
          },
        },
      ),
      App: createBottomTabNavigator(
        {
          Home,

          New: {
            screen: createStackNavigator(
              {
                SelectBarber,
                OverViewBarber,
                Local,
                SelectHairStyle,
                SelectProvider,
                SelectDateTime,
                Confirm,
              },
              {
                defaultNavigationOptions: {
                  headerTransparent: true,

                  headerTintColor: '#FFF',
                  headerLeftContainerStyle: {
                    marginLeft: 10,
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

          Dashboard,
          Profile,
        },
        {
          resetOnBlur: true,
          tabBarOptions: {
            keyboardHidesTabBar: true,
            activeTintColor: '#FFF',
            inactiveTintColor: 'rgba(255, 255, 255, 0.3)',
            style: {
              backgroundColor: 'rgb(37, 41, 46)',
            },
          },
        },
      ),
    },
    {
      initialRouteName: 'App',
    },
  ),
);

export default Routes;
