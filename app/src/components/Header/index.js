import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';
import logoImg from '../../assets/images/logo.png';

export default function Header () {

    function toggleDrawer(){
        navigation.toggleDrawer()
    }
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={logoImg} style={styles.logo} />
            <TouchableOpacity onPress={toggleDrawer}>
                <FontAwesome5 name={'bars'} size={35} color="#FFF" />
            </TouchableOpacity>
        </View>
    );
}
