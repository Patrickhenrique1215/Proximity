import { StyleSheet } from 'react-native';


const estiloNotificacoes = StyleSheet.create({

    caixa: {
        height: 80,
        borderWidth: 1,
        borderColor: '#22c1f6',
        borderRadius: 4,
        margin: 10,
        display: 'flex',
        flexDirection: 'row',
        gap: 4,
    },

    imgnotif: {
        width: '20%',
        height: 'auto',
        borderRadius: 4,

    },

    textnotif: {
        marginHorizontal: 6,
        marginVertical: 8,
        maxWidth: '75%',
        fontFamily: 'Poppins_400Regular',
        ellipsizeMode: 'tail', 
        numberOfLines: 3,
    }

});

export default estiloNotificacoes;

