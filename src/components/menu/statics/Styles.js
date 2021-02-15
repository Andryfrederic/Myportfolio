import {
    StyleSheet,
    Dimensions 
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Style = StyleSheet.create({
    container:{flex:1,
    width:windowWidth,
    height:windowHeight},
 image:{
    width:100,
    height:90
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
 }
  });
  export default Style;