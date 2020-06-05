import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

import StatusBarPattern from '../../components/StatusBar';
import Header from '../../components/Header';

export default function Score() {
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);

    function addPoint(points, team) {
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
                            <TouchableOpacity style={{marginRight: 30}} onPress={() => {addPoint(1,1)}}>
                                <FontAwesome5 name={'chevron-up'} size={30} color='#E82041'/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {removePoint(1)}}>
                                <FontAwesome5 name={'chevron-down'} size={30} color='#E82041'/>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.textButton}>TRUCO</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.teamScore}>
                        <Text style={styles.teamTitle}>Eles</Text>
                            <Text style={styles.teamPoints}>{score2}</Text>
                        <View style={styles.buttonsGrid}>
                        <TouchableOpacity style={{marginRight: 30}} onPress={() => {addPoint(1,2)}}>
                            <FontAwesome5 name={'chevron-up'} size={30} color='#E82041'/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {removePoint(2)}}>
                            <FontAwesome5 name={'chevron-down'} size={30} color='#E82041'/>
                        </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.textButton}>TRUCO</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}