import { View, Text, Image } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { MOCK_PROFILES} from '../../mocks/perfis';
import estiloDeslizar from './estiloDeslizar';

export default function Deslizar() {

  const renderCard = (perfil) => {
    if (!perfil) return null;

    return (
      <View style={estiloDeslizar.card}>
        <Image source={perfil.photo} style={estiloDeslizar.cardImage} resizeMode="cover" />
        <View style={estiloDeslizar.cardDetails}>
          <Text style={estiloDeslizar.cardName}>{perfil.name}, {perfil.age}</Text>
          <Text style={estiloDeslizar.cardBio} numberOfLines={2}>{perfil.bio}</Text>
        </View>
      </View>
    );
  };


  return (
    <View style={estiloDeslizar.container}>
      <Swiper
        cards={MOCK_PROFILES}
        containerStyle={estiloDeslizar.swiperContainer}
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

