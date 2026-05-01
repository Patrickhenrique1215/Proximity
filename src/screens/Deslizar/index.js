import { View, Text, Image } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { MOCK_PROFILES} from '../../mocks/perfis';
import estilo from './estilo';

export default function Deslizar() {

  const renderCard = (perfil) => {
    if (!perfil) return null;

    return (
      <View style={estilo.card}>
        <Image source={perfil.photo} style={estilo.cardImage} resizeMode="cover" />
        <View style={estilo.cardDetails}>
          <Text style={estilo.cardName}>{perfil.name}, {perfil.age}</Text>
          <Text style={estilo.cardBio} numberOfLines={2}>{perfil.bio}</Text>
        </View>
      </View>
    );
  };


  return (
    <View style={estilo.container}>
      <Swiper
        cards={MOCK_PROFILES}
        containerStyle={estilo.swiperContainer}
        renderCard={renderCard}
        onSwipedLeft={(cardIndex) => console.log('Recusou:', MOCK_PROFILES[cardIndex].name)}
        onSwipedRight={(cardIndex) => console.log('Curtiu:', MOCK_PROFILES[cardIndex].name)}
        onSwipedAll={() => console.log('Acabaram os perfis')}
        cardIndex={0}
        backgroundColor={'transparent'}
        stackSize={3}
        stackSeparation={15}
        overlayLabels={{
          left: {
            title: 'NOPE',
            style: {
              label: { backgroundColor: 'red', color: 'white', fontSize: 24 },
              wrapper: { flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-start', marginTop: 30, marginLeft: -30 }
            }
          },
          right: {
            title: 'LIKE',
            style: {
              label: { backgroundColor: 'green', color: 'white', fontSize: 24 },
              wrapper: { flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: 30, marginLeft: 30 }
            }
          }
        }}
      />  
    </View>
  );
}

