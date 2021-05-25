import React from 'react';
import {View, Text, StyleSheet, Button, ImageBackground} from 'react-native';
import GStyle from '../constants/styles';


const MenuList = (props) =>{
    const selectedItem = props.navigation.getParam('selectedMenu')
    console.log('selected Item:', selectedItem)
    const imageurl = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/300px-RedDot_Burger.jpg"
     return(
         <View>
             <Text>MenuList Screen</Text>
             <Text>{selectedItem.menuName}</Text>
             <View style={styles.imgCont}>
                 <Text>Image</Text>
                 <ImageBackground source={{uri:imageurl}} style={styles.bgImg}>

                 </ImageBackground>
             </View>
             <Button title="Go Back" onPress={() =>{props.navigation.goBack()}} />
         </View>
     )
}

MenuList.navigationOptions = (data) =>{
    const selectedItem = data.navigation.getParam('selectedMenu')
 
    return {
        headerTitle : selectedItem.menuName + ' Menu',
        headerStyle : {
            backgroundColor : GStyle.primaryBGColor,
            
        },
        headerTintColor: 'white'
    }
} 

const styles = StyleSheet.create({
    imgCont:{
       backgroundColor:"#ccc",
       margin:10,
       height:200,
       width:'80%',

    },
    bgImg : {
        height:'100%',
        width:'100%',
        borderRadius:10
    }
})

export default MenuList;