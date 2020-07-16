import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 32,
        backgroundColor: '#283593'
    },

    header: {
        flex: 1,
        paddingTop:20
    },

    elipse: {
        position: 'absolute',
        width: 900,
        height: 800,
        left: -424,
        borderRadius: 400,
        top: -150,
        backgroundColor: '#1A237E'
    },

    main: {
        flex: 4,
        marginVertical: 84,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    field: {
        width: 243,
        height: 92,
        backgroundColor: '#E8EAF6',
        borderRadius: 12,
    },

    selectBase: {
        backgroundColor: '#FFB74D',
        height: 32,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textNumberBased: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    footer: {
        flex: 1
    },

    
});

export default styles;