import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import FoodDetails from '../screens/FoodDetails';
import Menu from '../screens/Menu';

import MenuList from '../screens/MenuList';


const MenuNavigation = createStackNavigator({
    FoodInfo: FoodDetails,
    Menu: {
        screen: Menu
    },
    MenuList:MenuList

})

export default createAppContainer(MenuNavigation)