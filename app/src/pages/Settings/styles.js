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
        marginBottom: 30
    },

    property : {
        fontFamily: 'Quicksand-Bold',
        fontSize: 20,
        color: '#41414D',
        marginTop: 15,
        marginBottom: 15
    },

    propertyValue : {
        fontFamily: 'Quicksand-SemiBold',
        fontSize: 18,
        color: '#737380'
    },

    button : {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 120 
    },

    buttonText : {
        fontSize: 20,
        fontFamily: 'Quicksand-Bold',
        color: '#E82041',
        marginLeft: 10
    },

    propertyValueContainer : {
        flexDirection: 'row',
        alignItems:'center'
    }

})