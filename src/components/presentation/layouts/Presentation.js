import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    Dimensions
    } from "react-native";
import Styles from '../../../Styles';
import Style from '../statics/Styles'
const Details =()=>{
    const hp = (Dimensions.get('screen').height)/100;
    const wp = (Dimensions.get('window').width)/100;
return(
    <View style={Style.container}>
            <ScrollView style={Style.detailscontainer}>
                    <Text style={Styles.title}>
                    Bonjour!
                    </Text>
                    <View style={Styles.Textcontainer}>
                    <View>
                            <Text style={Style.title}>
                                    Langages de developpement:
                            </Text>
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        - Langage de programmation:
                                </Text>
                                <Text style={Style.details}>
                                          Pascal, C, C++, C#, Java, JavaScript, PHP, typscripte, Visual Basic, JSP
                                </Text>
                            </View>
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        - Styles:
                                </Text>
                                <Text style={Style.details}>
                                          Css, Bootstrap, HTML
                                </Text>
                            </View>
                        </View>
                        <View>
                            <Text style={Style.title}>
                                    Framework de développement Mobile:
                            </Text>
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        - React-native:
                                </Text>
                                <Text style={Style.details}>
                                          Deux ans d'éxpérience.
                                </Text>
                            </View>
                        </View>
                        <View style={Styles.Textcontainer}>
                            <Text style={Style.title}>
                                    Framework dévéloppement Web Front-end:
                            </Text>
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        - ReactJs:
                                </Text>
                                <Text style={Style.details}>
                                         Deux ans d'éxpérience.
                                </Text>
                            </View>
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        - AngularJs:
                                </Text>
                                <Text style={Style.details}>
                                         Deux mois d'éxpérience.
                                </Text>
                            </View>
                        </View>
                        <View style={Styles.Textcontainer}>
                            <Text style={Style.title}>
                                    Framwork de dévéloppement Web Back-end:
                            </Text>
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        - NodeJs:
                                </Text>
                                <Text style={Style.details}>
                                         Deux ans d'éxpérience.
                                </Text>
                            </View>
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        - CodeIgniter:
                                </Text>
                                <Text style={Style.details}>
                                         Deux ans d'éxpérience
                                </Text>
                            </View>
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        - Notion en: Django, Struts, Hibernate, Spring
                                </Text>
                            </View>
                            
                        </View>
                        <View style={Styles.Textcontainer}>
                            <Text style={Style.title}>
                                    Framework de dévéloppement d'application Desktop:
                            </Text>
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        - React-native:
                                </Text>
                                <Text style={Style.details}>
                                         Deux (02) ans d'éxpérience.
                                </Text>
                            </View>
                        </View>
                    </View>
                    {/* Autre projet */}

                    <View style={Styles.Textcontainer}>
                            <Text style={Style.title}>
                                    SGBD:
                            </Text>
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        - MySQL, MS Access, SQL lite,:
                                </Text>
                                <Text style={Style.details}>
                                         Quatre (04) ans d'éxpérience.
                                </Text>
                            </View>
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        - Mongo DB, Oracle, PorstgresSQL, AsyncStorage:
                                </Text>
                                <Text style={Style.details}>
                                         Un (01) ans d'éxpérience.
                                </Text>
                            </View>
                     </View>

                    <View>
                        {/* <Text style={[Styles.title,{marginTop:hp*1,opacity:0.5,fontSize:8}]}>
                                Merci de votre visite!
                        </Text> */}
                    </View>
                    
            </ScrollView>
    </View>
)
}
export default Details;