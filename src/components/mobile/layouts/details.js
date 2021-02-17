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
                    Mon projet personnel
                    </Text>
                    <View style={Styles.Textcontainer}>
                        <View>
                            <Text style={Style.title}>
                                    My portFolio
                            </Text>
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        Description:
                                </Text>
                                <Text style={Style.details}>
                                        C'est la présente application destiné pour présenté mes parcours de formation et stage ou travail et aussi quelques exemples des applications réalisés qu'ils soient personnels ou non. 
                                </Text>
                            </View>
                        </View>
                        <View style={Styles.Textcontainer}>
                            <Text style={Style.title}>
                                    Hi anatra
                            </Text>
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        Description:
                                </Text>
                                <Text style={Style.details}>
                                        C'est une application pédagogique pour apprendre la prononciation, les cibles sont les enfants moins de cinq(05) ans.
                                </Text>
                            </View>
                        </View>
                    </View>
                    {/* Autre projet */}
                    <View>
                        <Text style={[Styles.title,{marginTop:hp*5}]}>
                                Autre projet
                        </Text>
                    </View>
                    <View style={[Styles.Textcontainer,{marginBottom:hp*5}]}>
                        <View>
                            <Text style={Style.title}>
                                    Myoedb
                            </Text>
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        Description:
                                </Text>
                                <Text style={Style.details}>
                                        C'est un outil de captation video/photo/audio/texte pour les stagiaire de Forma2+.
                                </Text>
                            </View>
                        </View>
                        <View style={Styles.Textcontainer}>
                            <Text style={Style.title}>
                                    PizzaR
                            </Text>
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        Description:
                                </Text>
                                <Text style={Style.details}>
                                        C'est une application de vente et commande en ligne des Pizza.
                                </Text>
                            </View>
                        </View>
                    </View>
            </ScrollView>
    </View>
)
}
export default Details;