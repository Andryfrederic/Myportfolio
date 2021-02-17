import React, { Component } from 'react';
import {
View,
Text,
Dimensions
} from "react-native";
import Avatar from '../../avatar/layouts/Avatar'
import Menu from '../../menu/layouts/Menu'
import Footer from '../../footer/layouts/Footer'
import Webdetails from './webdetails'
import Details from '../../mobile/layouts/details'
class Web extends Component {
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
        this.props.navigation.navigate('Web')
      }
      toParcours(){
        this.props.navigation.navigate('Parcours')
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

          <Avatar  home={()=>this.home()}/>
          <Menu
            toMobile={()=>this.toMobile()}
            toWeb={()=>this.toWeb()}
            toParcours={()=>this.toParcours()}/>
           <Webdetails/>
          <Footer
          home={()=>this.home()}/>
      </View> 
      );
    }
  }
  
  export default Web;