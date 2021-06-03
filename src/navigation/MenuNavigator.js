import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
// import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation';
import FoodDetails from '../screens/FoodDetails';
import Menu from '../screens/Menu';
import {Ionicons} from '@expo/vector-icons';
import Table from '../screens/table';
import {createDrawerNavigator} from 'react-navigation-drawer';


import MenuList from '../screens/MenuList';
import Favaroute from '../screens/Favarotue';
import CustomFilter from '../screens/Filter';

const MenuNavigation = createStackNavigator({
    FoodInfo: FoodDetails,
    Menu: {
        screen: Menu
    },
    MenuList:MenuList,

});

const TabNavigation = createBottomTabNavigator({
    AllTab: {screen : MenuNavigation, navigationOptions:{
        tabBarIcon: tabInfo => {
            return (
              <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
            );
          },
    }},
    Favorites: {screen: Favaroute, navigationOptions: {
        tabBarIcon: tabInfo =>{
            return(
                <Ionicons name="ios-star" size ={25} color={tabInfo.tintColor}></Ionicons>
            )
        }
    },},
    ShowAll: {
        screen: Table, navigationOptions:{
            tabBarIcon : tab => {
                console.log('Tab:', tab)
                return(
                    <Ionicons name="ios-albums" size={25} color={tab.tintColor}></Ionicons>
                )
            }
        }
    }

})

const filterStack = createStackNavigator({
    filters: CustomFilter
})
const DrawerNavigation = createDrawerNavigator(
    {
        Menus: {
          screen: TabNavigation,
          navigationOptions: {
            drawerLabel: 'Meals'
          }
        },
        Filters: filterStack
      }
)

export default createAppContainer(DrawerNavigation)