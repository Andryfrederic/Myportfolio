import {
    StyleSheet,
    Dimensions 
} from 'react-native';
const wp = (Dimensions.get('window').width)/100;
const hp = (Dimensions.get('screen').height)/100;

const Style = StyleSheet.create({
    container:{},
 image:{
    width:wp*25,
    height:hp*11.5
 },
 title:{
     fontSize:12,
     fontWeight:'bold',
     paddingTop:4,
     paddingLeft:10,
     paddingRight:10,
     paddingBottom:4,
 },
 button:{
    backgroundColor:'#B7DFDA',
    borderRadius:10
 },
 text:{
     fontSize:12,
     marginTop:hp*3,
     marginHorizontal:wp*5,
     textAlign:'justify'
 }
  });
  export default Style;