import {
    StyleSheet,
    Dimensions 
} from 'react-native';
const wp = (Dimensions.get('window').width)/100;
const hp = (Dimensions.get('screen').height)/100;

const Style = StyleSheet.create({
    container:{flex:1},
 image:{
    width:wp*22,
    height:hp*10
 },
 icon:{
    width:wp*15,
    height:hp*6,
    // position:'absolute',
    // right:wp*2,
    borderRadius:50
},
myP:{
    position:'absolute',
    right:wp*2, 
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