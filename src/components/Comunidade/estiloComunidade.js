import { StyleSheet, Dimensions } from 'react-native';
import estiloglobal from '../../styles/estiloglobal';

const { width, height } = Dimensions.get('window');

const estiloComunidade = StyleSheet.create({

    caixaTopo: {
        marginTop: 15,
        marginRight: 16,
        marginBottom: 20,
        marginLeft: 16,
        padding: 18,
        backgroundColor: estiloglobal.cores.azulclaro,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.05)',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.25,
        shadowRadius: 18,
        elevation: 8,
    },

    titulo: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 18,
        marginBottom: 10,
        color: '#ffffff'
    },

    infos: {
        fontFamily: 'Poppins_400Regular',
        color: '#ffffff',
        backgroundColor: '#0389ff',
        padding: 4,
        paddingLeft: 10,
        marginVertical: 8,
        borderRadius: 10,
    },

    infodest: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 17,
    },

    agora: {
        marginRight: 16,
        marginBottom: 25,
        marginLeft: 16,
        padding: 18,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'rgb(45, 79, 165)',
        
    },

    qttext: {
        fontFamily: 'Poppins_400Regular',
        color: estiloglobal.cores.azulescurao,
        fontSize: 17,
    },

    qtagora: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 18,
    },

    gridCards: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        gap: 16,
        marginBottom: 20,
    },

    cardCom: {
        width: (width - 48) / 2,
        aspectRatio: 1,
        borderRadius: 6,
        overflow: 'hidden',
        backgroundColor: '#a4a2a2',
        borderWidth: 1,
        borderColor: '#97949c',
    },

    capaCardProfile: {
        width: '100%',
        height: '100%',
        
    }
 

});

export default estiloComunidade;