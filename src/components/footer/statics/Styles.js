import {
    StyleSheet,
    Dimensions 
} from 'react-native';
const wp = (Dimensions.get('window').width)/100;
const hp = (Dimensions.get('screen').height)/100;

const Style = StyleSheet.create({
    container:{
        position:'absolute',
        bottom:hp*1,
        width:wp*90,
        height:hp*8,
        backgroundColor:'#900C3F',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    }
 
  });
  export default Style;