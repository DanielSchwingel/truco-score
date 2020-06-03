import React from 'react';
import {View, Image} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

import styles from './styles';
import logoImg from '../../assets/images/logo.png';

export default function SideBar(props){
    return(
        <DrawerContentScrollView>
            <View style={styles.header}>
                <Image source={logoImg} style={styles.logo}/>
            </View>
            <DrawerItemList {...props}  />
        </DrawerContentScrollView>
    )

}