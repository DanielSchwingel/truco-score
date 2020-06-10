import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-community/async-storage';
import LottieView from 'lottie-react-native';

import styles from './styles';
import logoImg from '../../assets/images/logo.png';
import winnerJson from '../../assets/animations/winner.json';
import loserJson from '../../assets/animations/loser.json';

import StatusBarPattern from '../../components/StatusBar';
import Header from '../../components/Header';

export default function Score() {
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    const [modalTeam1, setModalTeam1] = useState(false);
    const [modalTeam2, setModalTeam2] = useState(false);
    const [maxPoints, setMaxPoints] = useState(0);

    function addPoint(team) {
        if (team === 1){
            setScore1(score1 + 1)
            if (score1 + 1 === maxPoints) {
                setModalTeam1(true)
            }
        }else{
            setScore2(score2 + 1)
            if (score2 + 1 === maxPoints) {
                setModalTeam2(true)
            }
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

    function resetValues() {
        setModalTeam1(false);
        setModalTeam2(false)
        setScore1(0);
        setScore2(0);
    }

    async function getSettings(){
        try {
            const jsonStr = await AsyncStorage.getItem('@TRUCO_STORE:settings')    
            const jsonValue = jsonStr != null ? JSON.parse(jsonStr) : null;
            setMaxPoints(jsonValue.points);           
        } catch(error) {
            setMaxPoints(12);
        }
    }

    useEffect(() =>{
        getSettings();
    }, []);

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
                            <TouchableOpacity style={{marginRight: 30}} onPress={() => {addPoint(1)}}>
                                <FontAwesome5 name={'chevron-up'} size={30} color='#E82041'/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {removePoint(1)}}>
                                <FontAwesome5 name={'chevron-down'} size={30} color='#E82041'/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.teamScore}>
                        <Text style={styles.teamTitle}>Eles</Text>
                            <Text style={styles.teamPoints}>{score2}</Text>
                        <View style={styles.buttonsGrid}>
                        <TouchableOpacity style={{marginRight: 30}} onPress={() => {addPoint(2)}}>
                            <FontAwesome5 name={'chevron-up'} size={30} color='#E82041'/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {removePoint(2)}}>
                            <FontAwesome5 name={'chevron-down'} size={30} color='#E82041'/>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={resetValues}>
                    <FontAwesome5 name={'retweet'} size={20} color='#FFF'/>
                    <Text style={styles.textButton}>REINICIAR</Text>

                </TouchableOpacity>
            </View>
            

            <Modal isVisible={modalTeam1}>
                <View style={styles.containerModal}>
                    <View style={styles.modal}>
                        <View style={styles.headerModal}>
                            <Image source={logoImg} style={styles.logoModal} />
                        </View> 
                        <View style={styles.bodyModal}>
                        <Text style={styles.teamTitle}>Parabéns campeão!</Text>
                        <View style={styles.inputModal}>
                        <LottieView style={styles.animation} source={winnerJson} autoPlay loop/>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={resetValues}>
                            <Text style={styles.textButton}>RECOMEÇAR</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal isVisible={modalTeam2}>
                <View style={styles.containerModal}>
                    <View style={styles.modal}>
                        <View style={styles.headerModal}>
                            <Image source={logoImg} style={styles.logoModal} />
                        </View> 
                        <View style={styles.bodyModal}>
                        <Text style={styles.teamTitle}>Não foi dessa vez!</Text>
                        <View style={styles.inputModal}>
                        <LottieView style={styles.animation} source={loserJson} autoPlay loop/>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={resetValues}>
                            <Text style={styles.textButton}>RECOMEÇAR</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}