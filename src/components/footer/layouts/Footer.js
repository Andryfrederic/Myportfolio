import React from 'react';
import { 
    Text,
    View,
    TouchableOpacity

} from 'react-native';
import Style from '../statics/Styles'
import Styles from '../../../Styles' 
class Footer extends React.Component {
  state = {
  }
  render(){
  return (
    <TouchableOpacity
    style={Style.container}
    onPress={this.props.home}>
          <View>
                   <Text style={[Styles.title,{color:'white'}]}>
                                  Portfolio de: Andrinantenaina Fréderic
                   </Text>
          </View>
    </TouchableOpacity>
  );
}
}

export default Footer;