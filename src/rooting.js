import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Accueil from './'
import Mobile from './components/mobile/layouts'
import Web from './components/web/layouts'
import Parcours from './components/parcours/layouts'
const RootStack = createStackNavigator(
    {
        Accueil:Accueil,
        Mobile:Mobile,
        Web:Web,
        Parcours:Parcours
    },
    {
      initialRouteName:'Accueil' ,

    }
   )
const Root = createAppContainer(RootStack);
export default Root;