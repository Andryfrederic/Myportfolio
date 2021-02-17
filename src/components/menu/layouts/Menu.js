import React, { Component } from 'react';
import {
View,
Text,
Image,
TouchableOpacity
} from "react-native";
import Style from '../statics/Styles'
import Styles from '../../../Styles'
class Menu extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
                       }
        // this.changeM=this.changeM.bind(this);
        // this.changeW=this.changeW.bind(this);
        // this.changeP=this.changeP.bind(this)               
      }

  componentDidMount() {
  }


  render() {
    return (
<View style={[Styles.row,{justifyContent:'space-around'}]}>
        <TouchableOpacity
        onPress={this.props.toMobile}>
            <View style={Style.button}>
                <Text style={Style.title}>
                    Mobile
                </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={this.props.toWeb}>
            <View style={Style.button}>
                <Text style={Style.title}>
                    Web
                </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={this.props.toParcours}>
            <View style={Style.button}>
                <Text style={Style.title}>
                    Parcours
                </Text>
            </View>
        </TouchableOpacity>
</View> 
    );
  }
}

export default Menu;

