import React, { useEffect, useState} from 'react';
import { Text, View, Platform ,ImageBackground} from 'react-native';
import Front from './src/Front';
import Search from './src/Search';

//var myBackground = require('../assets/icons/front.jpg');
export default class App extends React.Component{
  state={
    currentScreen:"front"
  }
  switchScreen = (currentScreen) =>{
    this.setState({currentScreen});
  }
  renderScreen = () =>{
    if(this.state.currentScreen === "front"){
      return(
        <Front switchScreen={this.switchScreen}/>
      )
    }
    else if(this.state.currentScreen === "search"){
      return(
        <Search />
      )
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderScreen()}
      </View>
    );
  }
}

const styles ={
container:{
  flex:1,
  marginTop: Platform.OS ==="android" ? 24 :0
}
}













/*import React, { Component } from 'react';
import { AppRegistry,StyleSheet,FlatList, Text, View,Image } from 'react-native';

export default class Example extends Component{
  constructor(){
    super()
    this.state={
      dataSource: []
    }
  }
  renderItem=({item}) => {
    return(
      <View>
        <Image style={styles.image}
          source={{ uri: item.recipe.image }} />
        <View style={styles.viewStyles}>
          <Text style={{fontSize:20,color:'green',marginBottom:15}}>
            {item.recipe.label}
          </Text>
          <Text style={{fontSize:16,color:'red'}}>
            {item.recipe.ingredientLines}
          </Text>
        </View>
      </View>
    )
         
  }

renderSeparator=() =>{
  return(
    <View
      style={{height:1,width:'100%',backgroundColor:'black'}}>
    </View>
  )
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
  render(){
    return(
      <View style={StyleSheet.container}>
        <FlatList
         data={this.state.dataSource}
         renderItem={this.renderItem}
         keyExtractor={(item,index)=> index}
         ItemSeparatorComponent={this.renderSeparator}
         />
      </View>
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
  image:{
    flex :1,
    flexDirection:'row',
    height:200,
        width: 200,
        justifyContent:'center',
        alignItems:'center'
  },
  viewStyles:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})*/