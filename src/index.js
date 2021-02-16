import React, { Component } from 'react';
import {
View,
Text,
Image,
TouchableOpacity
} from "react-native";
import Styles from './Styles'
import Presentation from './components/presentation/layouts/Presentation'
import Footer from './components/footer/layouts/Footer'
import Avatar from './components/avatar/layouts/Avatar'
import Parcours from './components/parcours/layouts/parcours'
import Menu from './components/menu/layouts/Menu'
class Accueil extends Component {
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
    <View
    style={Styles.idexcontainer}>
             <Avatar/>
             <Menu
                    toMobile={()=>this.toMobile()}
                    toWeb={()=>this.toWeb()}
                    toParcours={()=>this.toParcours()}
             />
             <View style={Styles.container}>
                    <Presentation/>
             </View>
             <View style={Styles.rowcontainer}>
                    <View style={Styles.arrow}/>
                    <TouchableOpacity
                      style={Styles.contactbutton}
                      onPress={()=>alert("ok")}>
                          <View style={Styles.button}>
                              <Text style={Styles.title}>
                                  Me contacter
                              </Text>
                          </View>
                      </TouchableOpacity>                            
              </View>
              <Footer/>
              
    </View> 
    );
  }
}

export default Accueil;

