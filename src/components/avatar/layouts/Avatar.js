import React, { Component } from 'react';
import {
View,
Text,
Image,
TouchableOpacity
} from "react-native";
import Style from '../statics/Styles'
import Styles from '../../../Styles'
class Avatar extends React.Component {
  state = {
  }

  componentDidMount() {
  }


  render() {
    return (
    <View>
            
                        <Text style={Style.title}>
                              My Portfolio
                        </Text>
                        <View style={Styles.row}>
                                <Image style={Style.image}
                                source={require('../statics/images/Avatar-23.png')}>
                                </Image>
                                <View>
                                <Text style={[Style.title,{fontSize:16}]}>
                                     Andrinantenaina Fréderic
                                </Text>
                                <Text style={Style.title}>
                                     Developpeur mobile(Android/IOS)
                                </Text>
                                <Text style={Style.title}>
                                      et Web
                                </Text>
                                </View>
                        </View>
                        <TouchableOpacity
                        style={Style.myP}
                        onPress={this.props.home}>
                                <Image style={Style.icon}
                                        source={require('../statics/images/iconMyP.png')}>
                                </Image>
                        </TouchableOpacity>
                        
    </View> 
    );
  }
}

export default Avatar;

