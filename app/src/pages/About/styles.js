import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center'
    },

    body : {
        flex: .8,
        paddingLeft: 30,
        paddingRight: 30,
        width: '100%',
    },

    title : {
        fontSize: 48,
        fontFamily: 'Quicksand-Bold',
        color: '#41414D',
    },

    property : {
        fontFamily: 'Quicksand-SemiBold',
        fontSize: 20,
        color: '#41414D',
        marginTop: 15
    },

    propertyValue : {
        fontFamily: 'Quicksand-SemiBold',
        fontSize: 20,
        color: '#737380',
        marginTop: 15
    },

    button : {
        flexDirection: 'row',
        alignItems: 'center'
    },

    buttonText : {
        fontSize: 20,
        fontFamily: 'Quicksand-Bold',
        color: '#E82041',
        marginLeft: 10
    }

})