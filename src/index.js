import React, { Component } from 'react';
import {
View,
Text,
Image
} from "react-native";
import Styles from './Styles'
import Avatar from './components/avatar/layouts/Avatar'
import Parcours from './components/parcours/layouts/parcours'
import Menu from './components/menu/layouts/Menu'
class Accueil extends React.Component {
  state = {
  }

  componentDidMount() {
  }


  render() {
    return (
    <View>
             <Avatar/>
             <Menu/>
    </View> 
    );
  }
}

export default Accueil;

