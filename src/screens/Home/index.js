import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import estilo from './estilo';

export default function Home() {
  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.title}>Comunidades</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={estilo.flexbox} >
          <Pressable style={estilo.card}><Image source={require('../../../assets/lago.png')} resizeMode='cover' style={estilo.capaCard} /></Pressable>
          <Pressable style={estilo.card}><Image source={require('../../../assets/tagshop.png')} resizeMode='cover' style={estilo.capaCard} /></Pressable>
          <Pressable style={estilo.card}><Image source={require('../../../assets/unb.png')} resizeMode='cover' style={estilo.capaCard} /></Pressable>
          <Pressable style={estilo.card}><Image source={require('../../../assets/pqagclaras.png')} resizeMode='cover' style={estilo.capaCard} /></Pressable>
          <Pressable style={estilo.card}><Image source={require('../../../assets/pqcidade.png')} resizeMode='cover' style={estilo.capaCard} /></Pressable>
        </ScrollView>
      </View>

      <View style={estilo.container}>
        <Text style={estilo.title} >Cruzamentos</Text>
        <Pressable style={estilo.cruzaPress}>
          <Image source={require('../../../assets/cruza.png')} resizeMode='contain' style={estilo.capaCruza} />
        </Pressable>
      </View>

      <View style={estilo.container}>
        <Text style={estilo.title} >Encontre seu match perfeito!</Text>
        <Pressable style={estilo.matchPress}>
          <Image source={require('../../../assets/match.png')} resizeMode='contain' style={estilo.capaCruza} />
        </Pressable>
      </View>

      <View style={estilo.container}>
        <Text style={estilo.title} >Diversão</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={estilo.flexbox} >
          <Pressable style={estilo.card}><Image source={require('../../../assets/lago.png')} resizeMode='cover' style={estilo.capaCard} /></Pressable>
          <Pressable style={estilo.card}><Image source={require('../../../assets/tagshop.png')} resizeMode='cover' style={estilo.capaCard} /></Pressable>
          <Pressable style={estilo.card}><Image source={require('../../../assets/unb.png')} resizeMode='cover' style={estilo.capaCard} /></Pressable>
          <Pressable style={estilo.card}><Image source={require('../../../assets/pqagclaras.png')} resizeMode='cover' style={estilo.capaCard} /></Pressable>
          <Pressable style={estilo.card}><Image source={require('../../../assets/pqcidade.png')} resizeMode='cover' style={estilo.capaCard} /></Pressable>
        </ScrollView>
      </View>

      <View style={estilo.container}>
        <Text style={estilo.title} >Explorar</Text>
        <Pressable style={estilo.matchPress}>
          <Image source={require('../../../assets/match.png')} resizeMode='contain' style={estilo.capaCruza} />
        </Pressable>
      </View>

      <View style={estilo.container}>
        <Text style={estilo.title} >Eventos Proximity</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={estilo.flexbox} >
          <Pressable style={estilo.card}><Image source={require('../../../assets/lago.png')} resizeMode='cover' style={estilo.capaCard} /></Pressable>
          <Pressable style={estilo.card}><Image source={require('../../../assets/tagshop.png')} resizeMode='cover' style={estilo.capaCard} /></Pressable>
          <Pressable style={estilo.card}><Image source={require('../../../assets/unb.png')} resizeMode='cover' style={estilo.capaCard} /></Pressable>
          <Pressable style={estilo.card}><Image source={require('../../../assets/pqagclaras.png')} resizeMode='cover' style={estilo.capaCard} /></Pressable>
          <Pressable style={estilo.card}><Image source={require('../../../assets/pqcidade.png')} resizeMode='cover' style={estilo.capaCard} /></Pressable>
        </ScrollView>
      </View>

      <View style={estilo.container}>
        <Text style={estilo.title} >Casamento</Text>
        <Pressable style={estilo.matchPress}>
          <Image source={require('../../../assets/match.png')} resizeMode='contain' style={estilo.capaCruza} />
        </Pressable>
      </View>

      <View style={estilo.container}>
        <Text style={estilo.title} >Passeios pela cidade</Text>
        <Pressable style={estilo.matchPress}>
          <Image source={require('../../../assets/match.png')} resizeMode='contain' style={estilo.capaCruza} />
        </Pressable>
      </View>
    </ScrollView>
  );
}
