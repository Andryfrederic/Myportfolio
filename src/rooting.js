import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Accueil from './'
import Mobile from './components/mobile/layouts'

const RootStack = createStackNavigator(
    {
        Accueil:Accueil,
        Mobile:Mobile
    },
    {
      initialRouteName:'Accueil' ,

    }
   )
const Root = createAppContainer(RootStack);
export default Root;