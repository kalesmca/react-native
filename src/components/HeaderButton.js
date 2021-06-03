import React from 'react';
import {StyleSheet} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';

const CustomButton = props =>{
    return(
        <HeaderButton
         {...props}
         IconComponent={Ionicons}
        iconSize={23}>

        </HeaderButton>

    )
}

export default CustomButton;