import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomButton from '../components/HeaderButton';

const FoodDetails = (props) =>{
    console.log('props:', props)
     return(
         <View>
             <Text>Food Detailssds</Text>
             <Button title="Go to Menu" onPress={()=>{
                 props.navigation.navigate({routeName: 'Menu'})
             }}></Button>
         </View>
     )
}

FoodDetails.navigationOptions = navData => {
    return {
        headerTitle: "Custom Title ",
        headerLeft: (<HeaderButtons HeaderButtonComponent={CustomButton}>
            <Item iconName="ios-menu" title="Menu" 
                onPress={() => {
            navData.navigation.toggleDrawer();
          }}
         />
        </HeaderButtons>)
    }
}

export default FoodDetails;