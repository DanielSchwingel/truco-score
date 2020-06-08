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
    const [light, setLight] = useState(false);

    const navigation = useNavigation();

    async function saveSettings() {
        try {
            const settings = {
                name: name,
                points: points,
                light: light
            }
            await AsyncStorage.setItem('@TRUCO_STORE:settings', JSON.stringify(settings));
            navigation.navigate('Placar');
        } catch (error) {
            alert(error);
        }
    }

    async function getSettings() {
        try {
            const jsonStr = await AsyncStorage.getItem('@TRUCO_STORE:settings')
            const jsonValue = jsonStr != null ? JSON.parse(jsonStr) : null;
            setPoints(jsonValue.points);
            setName(jsonValue.name);
            setLight(jsonValue.light);
        } catch(error) {
            alert(error)
        }
    }    

    useEffect(() =>{
        getSettings();
    }, []);

    return (
        <View style={styles.container}  behavior='height'>
            <StatusBarPattern />
            <Header />
            <Text style={styles.title}>Configurações</Text>
            <View style={styles.body}>
                <Text style={styles.property}>Seu nome</Text>
                <TextInput 
                    placeholder='Informe seu nome'
                    style={styles.propertyValue}
                    onChangeText={value => setName(value)}
                    value={name}
                />   
                <Text style={styles.property}>Pontuação final</Text>
                <View style={styles.propertyValueContainer} >
                    <TouchableOpacity onPress={()=>{setPoints(points + 1)}}>
                        <FontAwesome5 name={'chevron-up'} size={20} color='#E82041'/>
                    </TouchableOpacity>
                    <Text style={styles.propertyValue}>  {points}  </Text>
                    <TouchableOpacity onPress={()=>{setPoints(points - 1)}}>
                        <FontAwesome5 name={'chevron-down'} size={20} color='#E82041'/>
                    </TouchableOpacity>
                </View>
                
                <Text style={styles.property}>Manter tela do celular acessa</Text>
                <View style={styles.propertyValueContainer}>
                    <CheckBox
                        value={light}
                        onValueChange={setLight}
                    />
                    <Text style={styles.propertyValue}>Sim</Text>
                </View>      
                <TouchableOpacity style={styles.button} onPress={saveSettings}>
                    <FontAwesome5 name={'check'} size={28} color='#E82041'/>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity> 
            </View>
        </View>
    );
}