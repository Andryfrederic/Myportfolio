import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    Dimensions
    } from "react-native";
const Contactdetails =()=>{
    const hp = (Dimensions.get('screen').height)/100;
    const wp = (Dimensions.get('window').width)/100;
return(
    <View style={Style.container}>
            <Text>
                Contact
            </Text>
    </View>
)
}
export default Contactdetails;