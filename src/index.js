import React, { Component } from 'react';
import {
View,
Text,
Image,
Linking,
TouchableOpacity
} from "react-native";
import Styles from './Styles'
import Presentation from './components/presentation/layouts/Presentation'
import Footer from './components/footer/layouts/Footer'
import Avatar from './components/avatar/layouts/Avatar'
import Menu from './components/menu/layouts/Menu'
import Contactdetails from './components/contact/layouts'
import Contact from './components/contact/layouts/contact'
import Style from './components/presentation/statics/Styles';
class Accueil extends Component {
  static navigationOptions =
  {
   headerShown: false
  };

   constructor(props) {
       super(props);
   
       this.state = {
       Mclicked:'false',
       Wclicked:false,
       Pclicked:false
                      }
     }

  componentDidMount() {
  }
  toMobile(){
    this.setState({Mclicked:'true',
      //  Wclicked:false,
      //  Pclicked:false
});
    this.props.navigation.navigate('Mobile');
  
  }
  toWeb(){
    this.props.navigation.navigate('Web');
    this.setState({clicked:true})
  }
  toParcours(){
    this.props.navigation.navigate('Parcours');
    this.setState({clicked:true})
  }

  render() {
    const {Mclicked}=this.state;
    return (
    <View
    style={Styles.idexcontainer}>
             <Avatar  home={()=>this.home()}/>
             <Menu
                    toMobile={()=>this.toMobile()}
                    toWeb={()=>this.toWeb()}
                    toParcours={()=>this.toParcours()}
                    Mclicked={this.state.Mclicked}
             />
             <Presentation/>
             <View style={Styles.rowcontainer}>
              <Contact/>                              
              </View>
              <TouchableOpacity
              style={Styles.call}
               onPress={()=>Linking.openURL(`tel:${'+261347320993'}`)}>
                    <Image style={Styles.imagecall}
                           source={require('./images/call.jpg')}>
                    </Image>
              </TouchableOpacity>
              <Footer/>
              
    </View> 
    );
  }
}

export default Accueil;

