import { StyleSheet, Dimensions } from 'react-native';
import estiloglobal from '../../styles/estiloglobal';

const { width, height } = Dimensions.get('window');

const estiloComunidade = StyleSheet.create({

    caixaTopo: {
        marginLeft: 16,
    },

    titulo: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 18,
    },

    infos: {
        fontFamily: 'Poppins_400Regular',
    },

    gridCards: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        gap: 16,
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