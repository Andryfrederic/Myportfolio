import {
    StyleSheet,
    Dimensions 
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Styles = StyleSheet.create({
    container:{flex:1,
    width:windowWidth,
    height:windowHeight},
 image:{
    width:120,
    height:110
 },
 row:{
     flexDirection:'row',
     alignItems:'center'
 }
  });
  export default Styles;