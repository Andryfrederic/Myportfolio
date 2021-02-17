import {
    StyleSheet,
    Dimensions 
} from 'react-native';
const wp = (Dimensions.get('screen').width)/100;
const hp = (Dimensions.get('screen').height)/100;

const Style = StyleSheet.create({
    container:{
        width:wp*90,
        height:hp*40,
},
title:{
    fontSize:10,
    fontWeight:'bold',

},
contact:{
    fontSize:10,
    fontWeight:'100'
}
  });
  export default Style;