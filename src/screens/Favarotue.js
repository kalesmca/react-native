import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
const Favaroute = (props) => {
    return(
        <View style={styles.container}>
            <Text>FAV componenet</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Favaroute;