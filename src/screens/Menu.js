import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Menus from "../data/Menu.json";
import GStyle from "../constants/styles";
import MenuGrid from "../components/MenuGrid";

const Menu = (props) => {
  useEffect(() => {
    console.log("Menu Data: ", Menus);
  });

  const renderGridItem = (itemData) => {
    return (
      <MenuGrid
        item={itemData.item}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "MenuList",
            params: {
              selectedMenu: itemData.item,
            },
          });
        }}
      />
    );
  };

  return (
    
    <FlatList
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      data={Menus}
      renderItem={renderGridItem}
    />
  );
};
Menu.navigationOptions = {
  headerTitle: "Menu Card",
  headerStyle: {
    backgroundColor: GStyle.primaryBGColor,
  },
  headerTintColor: "white",
};

const styles = StyleSheet.create({});

export default Menu;
