import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#FFF'
    },

    body : {
        flex: .8,
        paddingLeft: 30,
        paddingRight: 30,
        width: '100%',
        alignItems : 'center',
    },

    title : {
        fontSize: 48,
        fontFamily: 'Quicksand-Bold',
        color: '#41414D',
    },

    score : {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    teamScore : {
        width: '45%',
        paddingLeft: 15,
        paddingRight: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },

    teamTitle : {
        fontFamily: 'Quicksand-SemiBold',
        fontSize: 24,
        color: '#737380',
        marginTop: 20
    },

    teamPoints : {
        fontFamily: 'Quicksand-SemiBold',
        color: '#E82041',
        fontSize: 110,
    },

    buttonsGrid : {
        flexDirection: 'row'
    },

    button : {
        width: '100%',
        backgroundColor: '#E82041' ,
        borderRadius: 8,
        marginTop: 15,
        alignItems: 'center',
        padding: 3
    },

    textButton : {
        fontFamily: 'Quicksand-Bold',
        fontSize: 15,
        color: '#FFF'
    }
})