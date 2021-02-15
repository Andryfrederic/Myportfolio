import React from 'react';
import { 
    Text,
    View

} from 'react-native';
import Style from '../statics/Styles'
import Styles from '../../../Styles' 
const Presentation = () => {
  return (
    <View>
        <Text style={Styles.title}>Bonjour!</Text>
        <View>
                <Text
                style={Style.text}>
                       - Profitez vous de voir les applications que j'ai developpée qu'il soient web ou mobile natif(Android/ios) en cliaquant sur les menus si-dessus.
                </Text>
                <Text
                style={Style.text}>
                        - Pour plus d'information, veillez me joindre sur facebook, e-mail ou skype
                </Text>
        </View>
    </View>
  );
}

export default Presentation;