import { StyleSheet, Dimensions } from 'react-native';
import estiloglobal from '../../styles/estiloglobal';

const { width, height } = Dimensions.get('window');

const estilo = StyleSheet.create({

  container: {
    flex: 1,
    marginBottom: 10,
    
  },

  title: {
    fontSize: 20,
    color: estiloglobal.cores.azulescurao,
    fontFamily: 'Poppins_600SemiBold',
    paddingLeft: 10,
  },

  /*Comunidades*/
  flexbox: {
    gap: 10,
    paddingLeft: 10,
    paddingRight: 10
  },

  card: {
    width: width * 0.50,
    height: height * 0.25,

  },

  capaCard: {
    width: '100%',
    height: '100%'
  },

  /*Cruzamentos*/
  cruzaPress: {
    width: width * 1,
    height: height * 0.22,
    paddingLeft: 10,
    paddingRight: 10
  },

  capaCruza: {
    width: '100%',
    height: '100%'
  },
  
  /*Encontre seu match perfeito!*/
  matchPress: {
    width: width * 1,
    height: height * 0.24,
    paddingLeft: 10,
    paddingRight: 10
  }

});

export default estilo;