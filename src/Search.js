import React, {Component } from 'react';
import {View,Text,StyleSheet,FlatList,Image, ImageBackground,Dimensions} from 'react-native';
import {Header,Button,Item, Icon, Input,ListItem,List} from 'native-base';
import RecipeLoader from './RecipeLoader';
import * as Font from 'expo-font';

// await loadAsync({
   
//     Montserrat: require('./assets/fonts/Montserrat.ttf')
// });
  

export default class Search extends Component{
    constructor(){
      super()
      this.state={
      // recipeSearch:"",
          onCall:true,
        dataSource: []
      }
    }
        componentDidMount(){
          const url ='https://api.edamam.com/search?q=chicken&app_id=fa59f0cc&app_key=009421a17ca52301be6529e88ce1e5c2'
          fetch(url)
          .then((response)=> response.json())
          .then((responseJson)=>{
             this.setState({
               dataSource:responseJson.hits
             })
          })
          .catch((error) =>{
            console.log(error)
          }
      
          )
        }

    renderItem=({item}) => {
      return(
        <ImageBackground style={styles.backgroundImage}
            source={{uri:"https://i.pinimg.com/236x/3f/a8/af/3fa8afaeabfde9a7305b0fc80cc303e1--scrapbook-background-flowers-background.jpg"}}>
       <View style={styles.info}>
       <Image style={styles.image}
            source={{ uri: item.recipe.image }} />
            <View>
            <ListItem itemDivider >
                       <Text style={{color:'forestgreen',fontSize:20,fontWeight:'bold'}}>{item.recipe.label}</Text>
                  </ListItem>
                  <ListItem  >
                       <Text style={{color:'black',fontSize:15}}>Ingredients - {item.recipe.ingredientLines}</Text>
                  </ListItem>
                  <ListItem itemDivider  >
                       <Text style={{color:'maroon',fontSize:15}}>Calories - {item.recipe.calories}</Text>
                  </ListItem>
                  </View>
        </View>
        </ImageBackground>
      )
           
    }
  
//   renderSeparator=() =>{
//     return(
//       <View
//         style={{height:1,width:'100%',backgroundColor:'black'}}>
//       </View>
//     )
//   }

  renderBody=() => {
    if(this.state.onCall){
        return(
          <RecipeLoader/>
        )
    }
  }

    render(){
      return(
          <FlatList
          renderBody={this.renderBody}
           data={this.state.dataSource}
           renderItem={this.renderItem}
           keyExtractor={(item,index)=> index}
           //ItemSeparatorComponent={this.renderSeparator}
           />
      );
    }
  }
  const styles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#F5FCFF'
    },
    backgroundImage:{
        flex:1,
        resizeMode: 'cover',
        height:'100%',
        width: '100%'
          
    },
    image:{
      flex :1,
        borderRadius:40,   
       height:185,
          width: 185,
          justifyContent:'center',
          alignContent:'center',
         // borderRadius:2,
          borderWidth: 2,
          borderColor: 'grey'
          
    },
    viewStyles:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },

    info:{
        flex: 1,
        //backgroundColor:'pink',
        opacity:0.8,
        fontSize:18,
        borderRadius:15,
        borderWidth: 5,
        borderColor: 'grey',
      flexDirection:'column'
    }
  })
