import React, { Component } from 'react';
import {
View,
Text,
Dimensions
} from "react-native";
import Avatar from '../../avatar/layouts/Avatar'
import Menu from '../../menu/layouts/Menu'
import Footer from '../../footer/layouts/Footer'
import Details from './details'
class Mobile extends Component {
    static navigationOptions =
    {
     headerShown: false
    };
  
     constructor(props) {
         super(props);
     
         this.state = {
         
                        }
       }
  
    componentDidMount() {
    }
   
    toMobile(){
        this.props.navigation.navigate('Mobile')
      }
      toWeb(){
        alert('props web')
      }
      toParcours(){
        alert('props parcours')
      }
      home(){
          this.props.navigation.navigate('Accueil')
      }
    render() {
        const hp = (Dimensions.get('screen').height)/100;
        const wp = (Dimensions.get('window').width)/100;
      return (
      <View style={{
          flex:1
      }}>

          <Avatar/>
          <Menu
            toMobile={()=>this.toMobile()}
            toWeb={()=>this.toWeb()}
            toParcours={()=>this.toParcours()}/>
           <Details/>
          <Footer
          home={()=>this.home()}/>
      </View> 
      );
    }
  }
  
  export default Mobile;