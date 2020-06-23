import React from 'react';
import {View,Image} from 'react-native';

class RecipeLoader extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Image
                   source={{uri: "https://media0.giphy.com/media/ll61xC3gYPh7C5SPCU/giphy.gif?cid=ecf05e47628e10fba560fb3d11ea57aa7b7c54c79dca4f9e&rid=giphy.gif"}}
                   style={styles.img}
                />
            </View>
        )
    }
}

const styles ={
    img:{
       height:400,
       width: 400,
       justifyContent:'center',
       alignItems: 'center'
    }
}
export default RecipeLoader;