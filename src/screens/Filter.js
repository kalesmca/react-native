import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CustomFilter = props => {
    return(
        <View style={styles.contaier}>
            <Text>Filter View</Text>
            <Button title="Back" onPress={() => {props.navigation.goBack()}} />
        </View>
    )
}

const styles = StyleSheet.create({
    contaier:{
        flex:1
    }
})

export default CustomFilter;