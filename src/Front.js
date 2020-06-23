import React from 'react';
import {View,Text,StyleSheet, Image, ImageBackground} from 'react-native';
import  {Button} from 'native-base';

var myBackground = require('../assets/icons/front.jpg');

class Front extends React.Component{
    render(){
        return(
          <View>
          <View style={StyleSheet.container}>
         <ImageBackground style={{width:'100%', height:'100%'}}
         source={myBackground}    >
   <View style={styles.viewStyle}>
  <Text
  style={styles.titleStyle}
  >Welcome to RecipeBook</Text>
  <Button 
  block={true}
  style={styles.buttonStyle}
  onPress={()=>this.props.switchScreen("search")} >
  <Text style={styles.buttonText}>Start Searching</Text>
  </Button>
  </View>
 </ImageBackground>
     </View>
     </View>
        )
    }
}
const styles=StyleSheet.create({
    viewStyle:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        top:0,
        left :0,
        right:0,
        bottom:0
      },
      image:{
          flex:1,
          height:400,
          width:300,
          justifyContent:'center',
         // textAlign:'center',
          borderRadius:50
      },
      heading:{
        textAlign:'center',
      },
      titleStyle:{
        fontSize:30,
        color:'black',
        //alignItems:'center'
      },
      buttonStyle:{
        margin:10
      },
      buttonText:{
        color:'white'
      }
})
export default Front;

/*  */