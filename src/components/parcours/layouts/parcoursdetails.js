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
const Parcoursdetails =()=>{
    const hp = (Dimensions.get('screen').height)/100;
    const wp = (Dimensions.get('window').width)/100;
return(
    <View style={Style.container}>
            <ScrollView style={Style.detailscontainer}>
                    <Text style={Styles.title}> 
                    Formation et diplôme
                    </Text>
                    <View style={Styles.Textcontainer}>
                        <View>
                            <Text style={Style.title}>
                                    Formations:
                            </Text>
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        2019-2020:
                                </Text>
                                <Text style={Style.details}>
                                         Première année de Master en Modélisation et Ingénierie Informatique  
                                </Text>
                            </View>
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        2018-2019:
                                </Text>
                                <Text style={Style.details}>
                                        Troisième année de Licence en Développement d`Application Internet /Intranet à l'Ecole de Management et d` Innovation Technologique et obtention de la diplôme de licence.
                                </Text>
                            </View>
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        2017-2018:
                                </Text>
                                <Text style={Style.details}>
                                        Deuxième année de Licence en Développement d`Application Internet /Intranet, 
                                        Ecole de Management et d` Innovation Technologique   
                                </Text>
                            </View>
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        2016-2017:
                                </Text>
                                <Text style={Style.details}>
                                        Première année de Licence en Développement d`Application Internet /Intranet    
                                </Text>
                            </View>
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        2015-2016:
                                </Text>
                                <Text style={Style.details}>
                                        Baccalauréat série C, Fianarantsoa     
                                </Text>
                            </View>
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        2015-2016:
                                </Text>
                                <Text style={Style.details}>
                                Troisième Année de Licence en Mention « Civilisations et Langues Appliquées » 
                                (CILA),  Parcours  «  Langues  Appliquées  »,  Faculté  des  Lettres  et  Sciences  Humaines, 
                                Université de Fianarantsoa.      
                                </Text>
                            </View>
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        2014-2015:
                                </Text>
                                <Text style={Style.details}>
                                        Deuxième Année de Licence en Mention « Civilisations et Langues Appliquées » 
                                        (CILA), Faculté des Lettres et Sciences Humaines, Université de Fianarantsoa  
                                </Text>
                            </View>
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        2013-2014:
                                </Text>
                                <Text style={Style.details}>
                                        Première Année de Licence en Mention « Civilisations et Langues Appliquées » 
                                        (CILA), Faculté des Lettres et Sciences Humaines, Université de Fianarantsoa 
                                </Text>
                            </View>
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        2012-2013:
                                </Text>
                                <Text style={Style.details}>
                                        Baccalauréat série A2, Fianarantsoa 
                                </Text>
                            </View>
                        </View>
                        
                    </View>
                    {/* Stage */}
                    <View style={[Styles.Textcontainer,{marginBottom:hp*5}]}>
                        <View>
                            <Text style={Style.title}>
                                Stage et éxpérience professionnel:
                            </Text>
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        Mars 2020 – Janvier 2021:
                                </Text>
                                <Text style={Style.details}>
                                        Collaborer avec Forma2+ pour développer une autre application 
                                        mobile (Android/iOS) sous la Framework React-native (contrat freelance) 
                                </Text>
                            </View>
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        Début Novembre 2019- début Mars 2020 : 
                                </Text>
                                <Text style={Style.details}>
                                        Stagiaire au sein de la société Forma2+ en tant 
                                        que développeur mobile. (Stage en ligne en France). droid/iOS) sous la Framework React-native (contrat freelance) 
                                </Text>
                            </View>
                            <View style={[Styles.subDetails,{marginLeft:50}]}>
                                <Text style={Style.titleDesc}>
                                        Projet de stage: 
                                </Text>
                                <Text style={Style.details}>
                                        Conception et réalisation d’une application mobile plateforme stagiaire de la 
                                        société Forma2+ 
                                </Text>
                                <View style={[Styles.subDetails,{marginLeft:50}]}>
                                <Text style={Style.titleDesc}>
                                        Framework front-end: 
                                </Text>
                                <Text style={Style.details}>
                                        react-native 
                                </Text>
                                </View>
                                <View style={[Styles.subDetails,{marginLeft:50}]}>
                                        <Text style={Style.titleDesc}>
                                                Back-end: 
                                        </Text>
                                        <Text style={Style.details}>
                                                CodeIgniter 
                                        </Text>
                                </View>
                                <View style={[Styles.subDetails,{marginLeft:50}]}>
                                        <Text style={Style.titleDesc}>
                                                SGBD: 
                                        </Text>
                                        <Text style={Style.details}>
                                                MySQL 
                                        </Text>
                                </View>
                            </View>
                            
                            <View style={Styles.subDetails}>
                                <Text style={Style.titleDesc}>
                                        Début Novembre 2018 – Fin Janvier 2019 :
                                </Text>
                                <Text style={Style.details}>
                                        Stagiaire informaticien à la CHUA (Centre 
                                        Hospitalier Universitaire Andrainjato) 
                                </Text>
                            </View>
                            <View style={[Styles.subDetails,{marginLeft:50}]}>
                                <Text style={Style.titleDesc}>
                                        Projet de Stage : 
                                </Text>
                                <Text style={Style.details}>
                                        Conception et réalisation d` un logiciel de gestion des opérations des 
                                        patient au sein du service stomatologie du CHUA  
                                </Text>
                                <View style={[Styles.subDetails,{marginLeft:50}]}>
                                <Text style={Style.titleDesc}>
                                        Langages utilisés :  
                                </Text>
                                <Text style={Style.details}>
                                        Java 
                                </Text>
                                <Text style={Style.titleDesc}>
                                        SGBD:  
                                </Text>
                                <Text style={Style.details}>
                                        MySQL 
                                </Text>
                            </View>
                            </View>
                        </View>
                        
                    </View>
            </ScrollView>
    </View>
)
}
export default Parcoursdetails;