import React from 'react';
import { 
    Text,
    View

} from 'react-native';
import Style from '../statics/Styles'
import Styles from '../../../Styles' 
const Footer = () => {
  return (
    <View
    style={Style.container}>
        <Text style={[Styles.title,{color:'white'}]}>Portfolio de: Andrinantenaina Fréderic</Text>
        
    </View>
  );
}

export default Footer;