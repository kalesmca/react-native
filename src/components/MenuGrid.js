import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import gstyle from '../constants/styles';

const MenuGrid = (props) => {
  return (
    
      <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
        <View style={{...styles.container ,...{backgroundColor:props.item.color}}}>
          <Text style={{...styles.font, ...{color:gstyle.primayFontColor}}}>{props.item.menuName}</Text>
        </View>
      </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 25,
    height: 150,
  },
  container:{
    flex:1,
    justifyContent: "flex-end",
    padding:15,
    alignItems:"flex-end",
    borderRadius:10,
    shadowColor: "black",
    shadowOpacity: 0.20,
    shadowOffset:{width: 0,height:5},
    shadowRadius: 10,
    elevation: 3,
    
  }, 
  font:
    {fontSize: 15, fontWeight:"bold"}
  
});

export default MenuGrid;
