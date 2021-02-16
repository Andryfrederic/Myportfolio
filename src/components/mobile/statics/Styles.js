import {
    StyleSheet,
    Dimensions 
} from 'react-native';
const wp = (Dimensions.get('window').width)/100;
const hp = (Dimensions.get('screen').height)/100;

const Style = StyleSheet.create({
    container:{
flex:1
    },
detailscontainer:{
    width:wp*90,
    height:hp*55,
    backgroundColor:'blue',
    marginTop:hp*2,
    alignSelf:'center'
}
 
  });
  export default Style;