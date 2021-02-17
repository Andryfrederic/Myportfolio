import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    Dimensions
    } from "react-native";
    import Style from '../statics/Styles' 
    const Contact = () =>{
        return(
            <View>
                    <View style={{
                        flexDirection:'row'
                    }}>
                        
                            <Text style={Style.title}>
                                    e-mail:
                            </Text>
                            <Text style={Style.title}>
                                    fredandrinantenaina@gmail.com
                            </Text>
                    </View>
                    <View style={{
                        flexDirection:'row'
                    }}>
                        
                            <Text style={Style.title}>
                                    Skype:
                            </Text>
                            <Text style={Style.title}>
                                    Frederic Andry
                            </Text>
                    </View>
                    <View style={{
                        flexDirection:'row'
                    }}>
                        
                            <Text style={Style.title}>
                                    Facebook:
                            </Text>
                            <Text style={Style.title}>
                                    Iandry ihany ty
                            </Text>
                    </View>
                    <View style={{
                        flexDirection:'row'
                    }}>
                        
                            <Text style={Style.title}>
                                    Tel:
                            </Text>
                            <Text style={Style.title}>
                                    +261 34 73 209 93
                            </Text>
                    </View>
            </View>
        )
    }
export default Contact;