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
  state = {
  }

  componentDidMount() {
  }


  render() {
    return (
<View style={[Styles.row,{justifyContent:'space-around'}]}>
        <TouchableOpacity
        onPress={()=>alert('ok')}>
            <View style={Style.button}>
                <Text style={Style.title}>
                    Mobile
                </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>alert('ok')}>
            <View style={Style.button}>
                <Text style={Style.title}>
                    Web
                </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>alert('ok')}>
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

