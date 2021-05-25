import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const FoodDetails = (props) =>{
    console.log('props:', props)
     return(
         <View>
             <Text>Food Details</Text>
             <Button title="Go to Menu" onPress={()=>{
                 props.navigation.navigate({routeName: 'Menu'})
             }}></Button>
         </View>
     )
}

export default FoodDetails;