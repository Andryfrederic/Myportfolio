import React, { Component } from 'react';
import {
View,
Text,
} from "react-native";
import Avatar from '../../avatar/layouts/Avatar'
import Menu from '../../menu/layouts/Menu'
import Footer from '../../footer/layouts/Footer'
class Mobile extends React.Component {
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
    render() {
      return (
      <View style={{
          flex:1
      }}>
          
          <Avatar/>
          <Menu
            toMobile={()=>this.toMobile()}
            toWeb={()=>this.toWeb()}
            toParcours={()=>this.toParcours()}/>
                <Text>
                    Mobile
                </Text>
          <Footer/>
      </View> 
      );
    }
  }
  
  export default Mobile;