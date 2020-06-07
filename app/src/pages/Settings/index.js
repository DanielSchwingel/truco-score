import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import CheckBox from '@react-native-community/checkbox';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import StatusBarPattern from '../../components/StatusBar';
import Header from '../../components/Header';

import styles from './styles';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';



export default function Settings() {
    const [points, setPoints] = useState(12);
    const [name, setName] = useState('');
    const [checked, setChecked] = useState(false);

    const navigation = useNavigation();

    async function saveSettings() {
        try {
            await AsyncStorage.setItem('@TRUCO_STORE:name', name);
            // await AsyncStorage.setItem('@TRUCO_STORE:light', checked);
            navigation.goBack();
        } catch (error) {
            alert(error);
        }
    }

    async function getSettings() {
        try {
            setName(await AsyncStorage.getItem('@TRUCO_STORE:name'));
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() =>{
        getSettings();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBarPattern />
            <Header />
            <Text style={styles.title}>Configurações</Text>
            <View style={styles.body}>
                <Text style={styles.property}>Pontuação final</Text>

                
                <Text style={styles.property}>Manter tela do ceular acessa</Text>
                <View style={styles.checkContainer}>
                <CheckBox
                    value={checked}
                    onValueChange={setChecked}
                />
                    <Text style={styles.propertyValue}>Sim</Text>
                </View>
                {/* <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={() => toggleCheckBox ? setToggleCheckBox(false) : setToggleCheckBox(true)}
                /> */}
                <Text style={styles.property}>Seu nome</Text>
                <TextInput 
                    placeholder='Informe seu nome'
                    style={styles.propertyValue}
                    onChangeText={value => setName(value)}
                    value={name}
                />         
                <TouchableOpacity style={styles.button} onPress={saveSettings}>
                    <FontAwesome5 name={'check'} size={28} color='#E82041'/>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity> 
            </View>
        </View>
    );
}