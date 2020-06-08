import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Header from '../../components/Header';
import StatusBarPattern from '../../components/StatusBar';

import styles from  './styles';

export default function About (){
    const navigation = useNavigation();

    function navigateBack(){
        navigation.navigate('Placar');
    }
    return(
        <View style={styles.container}>
            <StatusBarPattern />
            <Header/>
            <Text style={styles.title}>Sobre</Text>
            <View style={styles.body}>
                <Text style={styles.property}>Versão</Text>
                <Text style={styles.propertyValue}>1.0.0.0</Text>
                
                <Text style={styles.property}>Desenvolvido por</Text>
                <Text style={styles.propertyValue}>Daniel Filipe Schwingel</Text>

                <Text style={styles.property}>Lançado em</Text>
                <Text style={styles.propertyValue}>13/06/2020</Text>

                <Text style={styles.property}>Atribuição de ícones</Text>
                <Text style={[styles.propertyValue, { marginBottom: 35 }]}>Ícone criado por  Smashicons  de  www.flaticon.com</Text>

                <TouchableOpacity style={styles.button} onPress={navigateBack}>
                    <FontAwesome5 name={'arrow-left'} size={20} color='#E82041'/>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity> 
            </View>

        </View>
    );

}