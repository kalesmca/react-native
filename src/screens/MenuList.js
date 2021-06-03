import React,{useEffect} from 'react';
import {View, Text, StyleSheet, Button, ImageBackground, FlatList, TouchableOpacity} from 'react-native';
import GStyle from '../constants/styles';
import categoryList from '../data/CategoryList';


const MenuList = (props) =>{
    const selectedItem = props.navigation.getParam('selectedMenu')
    console.log('selected Item:', selectedItem)
    const imageurl = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/300px-RedDot_Burger.jpg"
    const renderData = itemData => {
        console.log('data:', itemData)
        return(
            <TouchableOpacity onPress={()=>{
                props.navigation.navigate('FoodInfo')
            }}>
                <View style={styles.catContainer}>
                <ImageBackground source={{uri: itemData.item.imgUrl}} style={styles.bgImg}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{itemData.item.catName}</Text>
                    </View>
                

                </ImageBackground>
            </View>
            </TouchableOpacity>
            
        )
    }
     return(
        //  <View>
        //      <Text>MenuList Screen</Text>
        //      <Text>{selectedItem.menuName}</Text>
        //      <View style={styles.imgCont}>
        //          <Text>Image</Text>
        //          <ImageBackground source={{uri:imageurl}} style={styles.bgImg}>

        //          </ImageBackground>
        //      </View>
        //      <Button title="Go Back" onPress={() =>{props.navigation.goBack()}} />
        //  </View>
        <View style={styles.container}>
            <Text >{selectedItem.menuName}</Text>
            <FlatList 
                data={categoryList}
                keyExtractor={(item, index)=>item.id}
                renderItem={renderData}
                numColumns={1}
            />

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
    container:{
        flex:1,
        justifyContent: 'center',
        padding: 10,
        alignItems:"center"
    },
    bgImg : {
        height:'100%',
        width:'100%',
        borderRadius:10,
        justifyContent: "flex-end"
    },
    catContainer:{
        flex:1,
        height:200,
        margin:5,
        flexDirection:'row',
        
                
    },
    imgHeader:{
        padding: 10,
        
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12
      },
      title: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
      }
})

export default MenuList;