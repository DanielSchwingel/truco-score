import React from 'react';
import { StatusBar, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './styles';
import logoImg from '../../assets/images/logo_home.png';

export default function Home() {
    const navigation = useNavigation();

    function navigateScore(){
        navigation.navigate('Placar');
    }
    return (
        <View style={styles.container}>
            <StatusBar 
                barStyle="dark-content"
                backgroundColor ="#FFF"
            />
            <Image source={logoImg} />
            <Text style={styles.title}>Bem vindo ao Truco Score!</Text>
            <Text style={styles.description}>
                Você tá no barzinho com a galera, tem baralho mas falta a folha e a caneta?! Sem problemas! Te ajudo! 
            </Text>
            <TouchableOpacity onPress={navigateScore}>
                <Text style={styles.button}>Vamos jogar!</Text>
            </TouchableOpacity>
        </View>
    );
}