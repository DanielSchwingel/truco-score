import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button, Image, TextInput } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Modal from 'react-native-modal';

import styles from './styles';
import logoImg from '../../assets/images/logo.png'

import StatusBarPattern from '../../components/StatusBar';
import Header from '../../components/Header';

export default function Score() {
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    const [team, setTeam] = useState(1);
    const [points, setPoints] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);

    function addPoint(team) {
        if (team === 1){
            setScore1(score1 + points)
        }else{
            setScore2(score2 + points)
        }
    }

    function removePoint(team) {
        if (team === 1){
            if (score1 === 0){
                return
            }
            setScore1(score1 - 1)
        }else{
            if (score2 === 0){
                return
            }
            setScore2(score2 - 1)
        }
    }

    return (
        <View style={styles.container}>

            <StatusBarPattern />
            <Header/>   
            <View style={styles.body}>             
                <Text style={styles.title}>Placar</Text>
                <View style={styles.score}>
                    <View style={styles.teamScore}>
                        <Text style={styles.teamTitle}>Nós</Text>
                        <Text style={styles.teamPoints}>{score1}</Text>
                        <View style={styles.buttonsGrid}>
                            <TouchableOpacity style={{marginRight: 30}} onPress={() => {setPoints(1); addPoint(1)}}>
                                <FontAwesome5 name={'chevron-up'} size={30} color='#E82041'/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {removePoint(1)}}>
                                <FontAwesome5 name={'chevron-down'} size={30} color='#E82041'/>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={()=>{setModalVisible(true); setTeam(1)}}>
                            <Text style={styles.textButton}>TRUCO</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.teamScore}>
                        <Text style={styles.teamTitle}>Eles</Text>
                            <Text style={styles.teamPoints}>{score2}</Text>
                        <View style={styles.buttonsGrid}>
                        <TouchableOpacity style={{marginRight: 30}} onPress={() => {setPoints(1); addPoint(2)}}>
                            <FontAwesome5 name={'chevron-up'} size={30} color='#E82041'/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {removePoint(2)}}>
                            <FontAwesome5 name={'chevron-down'} size={30} color='#E82041'/>
                        </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={()=>{setModalVisible(true); setTeam(2)}}>
                            <Text style={styles.textButton}>TRUCO</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Modal isVisible={modalVisible}>
                <View style={styles.containerModal}>
                    <View style={styles.modal}>
                        <View style={styles.headerModal}>
                            <Image source={logoImg} style={styles.logoModal} />
                            <TouchableOpacity onPress={()=>{setModalVisible(false)}}>
                                <FontAwesome5 name={'times'} size={28} color='#FFF'/>
                            </TouchableOpacity>
                        </View> 
                        <View style={styles.bodyModal}>
                        <Text style={styles.teamTitle}>A "trucada" foi de:</Text>
                        <View style={styles.inputModal}>
                            <NumericInput 
                                style={styles.inputModal} 
                                onChange={value => {setPoints(value)}} 
                                minValue={0}
                            />
                        </View>
                        <TouchableOpacity style={styles.button} onPress={()=>{setPoints(1); addPoint(team), setModalVisible(false)}}>
                            <Text style={styles.textButton}>Bora lá!!!</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}