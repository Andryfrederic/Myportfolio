import {
    StyleSheet,
    Dimensions 
} from 'react-native';
const wp = (Dimensions.get('window').width)/100;
const hp = (Dimensions.get('screen').height)/100;

const Style = StyleSheet.create({
    container:{
alignSelf:'center',
width:wp*90,
height:hp*50,
    },
detailscontainer:{
    width:wp*90,
    height:hp*45,
    // backgroundColor:'blue',
    marginTop:hp*2,
    elevation: 15,
    backgroundColor: "white",
    borderRadius: 6,
    borderTopWidth: 1,
    borderColor: "rgba(0,0,0,0.1)"
},
title:{
    fontSize:12,
    fontWeight:'bold',
    paddingTop:4,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:4,
},
titleDesc:{
    fontSize:12,
    fontWeight:'900',
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:4,
},
details:{
    marginLeft:wp*10,
    fontSize:11,
    fontWeight:'100',
    opacity:0.5,
    textAlign:'justify',
    width:wp*60
}
 
  });
  export default Style;