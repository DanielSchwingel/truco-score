import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 30,
    },

    title : {
        fontFamily: 'Quicksand-Bold',
        color :'#41414D',
        fontSize: 24,
        marginTop: 40
    },

    description : {
        fontFamily: 'Quicksand-Regular',
        color: '#737380',
        marginTop: 40,
        fontSize: 20,
        textAlign: 'center'
    },

    button : {
        fontFamily: 'Quicksand-SemiBold',
        fontSize: 20,
        color: '#737380',
        textAlign: 'center',
        marginTop: 40
    }

})