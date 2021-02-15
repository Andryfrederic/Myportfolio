import {
    StyleSheet,
    Dimensions 
} from 'react-native';
const wp = (Dimensions.get('screen').width)/100;
const hp = (Dimensions.get('screen').height)/100;

const Styles = StyleSheet.create({
    idexcontainer:{
        flex:1
    },
    container:{
        width:wp*90,
        height:hp*40,
        alignSelf:'center',
        marginTop:hp*2,
        backgroundColor:'#FAEDB5'
},
rowcontainer:{
    width:wp*90,
    height:hp*5,
    alignSelf:'center'
  },
arrow:{
    position:'absolute',
    top:-hp*1,
    right:-wp*3.7,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 15,
    borderRightWidth: 20,
    borderBottomWidth: 15,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor:"#FAEDB5",
    transform: [
        { rotate: '60deg' }
    ],
   },
 image:{
    width:120,
    height:110
 },
 row:{
     flexDirection:'row',
     alignItems:'center'
 },
 button:{
    backgroundColor:'#B7DFDA',
    borderRadius:10,
    alignSelf:'center'
 },
 title:{
    fontSize:12,
    fontWeight:'bold',
    paddingTop:4,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:4,
    textAlign:'center'
},
contactbutton:{
    width:wp*40,
    position:'absolute',
    right:-wp*5,
    top:hp*4
}
  });
  export default Styles;