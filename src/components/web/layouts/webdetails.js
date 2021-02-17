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
const Webdetails =()=>{
    const hp = (Dimensions.get('screen').height)/100;
    const wp = (Dimensions.get('window').width)/100;
return(
    <View style={Style.container}>
            <ScrollView style={Style.detailscontainer}>
                    <Image style={Styles.image}
                    source={require('../../../images/bouton.jpg')}>
                    </Image>
                    <Text style={Styles.title}>
                    Projet en freelance
                    </Text>
                    <View style={Styles.Textcontainer}>
                        <View>
                            <Text style={Style.title}>
                                    Perle rencontre
                            </Text>
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        Description:
                                </Text>
                                <Text style={Style.details}>
                                        Participation au developpement du front-end du site de rencontre "Perle rencontre" 
                                </Text>
                                
                            </View>
                        </View>
                        
                    </View>
                    {/* Autre projet */}
                    <View>
                        <Text style={[Styles.title,{marginTop:hp*5}]}>
                                Projet de Stage
                        </Text>
                    </View>
                    <View style={[Styles.Textcontainer,{marginBottom:hp*5}]}>
                        <View>
                            <Text style={Style.title}>
                                    Gestion de stomatologie
                            </Text>
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        Description:
                                </Text>
                                <Text style={Style.details}>
                                        C'est une application de gestion de résérvation en ligne et auto-facturation des patients au service Stomatologie de la CHU Andrainjato Fianarantsoa
                                </Text>
                                
                            </View>
                        </View>
                        
                    </View>

                    
                    <Text style={Styles.title}>
                    Projet d'ecole
                    </Text>
                    <View style={Styles.Textcontainer}>
                        <View>
                            <Text style={Style.title}>
                                    Gestion d'un centre d'immatriculation
                            </Text>
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        Description:
                                </Text>
                                <Text style={Style.details}>
                                        C'est une application de gestion d'un centre immatriculation ainsi l'impression automatique de la carte grise.
                                </Text>
                               
                            </View>
                        </View>
                        
                    </View>
                    <View style={[Styles.Textcontainer,{marginBottom:hp*5}]}>
                        <View>
                            <Text style={Style.title}>
                                    Gestion d'un cabinet d'Avocat
                            </Text>
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        Description:
                                </Text>
                                <Text style={Style.details}>
                                        C'est une application de gestion de rendez-vous et de payement entre un Avocat et son client.
                                </Text>
                            </View>
                        </View>
                    </View>
                    
            </ScrollView>
    </View>
)
}
export default Webdetails;