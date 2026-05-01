import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const estilo = StyleSheet.create({
  container: {
    flex: 1,
  },

  swiperContainer: {
    flex: 1,
  },

  card: {
    height: height * 0.7, 
    width: width * 0.9, 
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: 'white',
    overflow: 'hidden',
    // Sombra para Android
    elevation: 8, 
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 15,
    // Garante que o card não fique grudado no topo
    marginTop: -20, 
  },
  cardImage: {
    width: '100%',
    height: '75%', // Imagem ocupa a maior parte do card
  },
  cardDetails: {
    width: '100%',
    height: '25%', // Detalhes ocupam o restante
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  cardName: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2D3436',
  },
  cardBio: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    color: '#636E72',
    marginTop: 5,
    lineHeight: 20,
  },
});

export default estilo;