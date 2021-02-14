import React, { Component } from 'react';
import {
View,
Text,
Image
} from "react-native";
import Styles from './Styles'
import Avatar from './components/avatar/layouts/Avatar'
import Parcours from './components/parcours/layouts/parcours'
class Accueil extends React.Component {
  state = {
  }

  componentDidMount() {
  }


  render() {
    return (
    <View>
             <Avatar/>
<Parcours/>
    </View> 
    );
  }
}

export default Accueil;

