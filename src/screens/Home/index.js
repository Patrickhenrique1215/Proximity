import { useState } from 'react';
import { View, Text, ScrollView, Image, Pressable, Animated, Easing } from 'react-native';

import estiloHome from './estiloHome';


export default function Home() {


  return (
   
    <ScrollView>

     <View style={estiloHome.container}>
        <Text style={estiloHome.title} >Cruzamentos</Text>
        <Pressable style={estiloHome.cruzaPress}>
          <Image source={require('../../../assets/cruza.png')} resizeMode='contain' style={estiloHome.capaCruza} />
        </Pressable>
      </View>

      <View style={estiloHome.container}>
        <Text style={estiloHome.title}>Comunidades</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={estiloHome.flexbox} >
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/lago.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/tagshop.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/pqagclaras.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/unb.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/pqcidade.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
        </ScrollView>
      </View>

      <View style={estiloHome.container}>
        <Text style={estiloHome.title} >Encontre seu match perfeito!</Text>
        <Pressable style={estiloHome.matchPress}>
          <Image source={require('../../../assets/match.png')} resizeMode='contain' style={estiloHome.capaCruza} />
        </Pressable>
      </View>

      <View style={estiloHome.container}>
        <Text style={estiloHome.title} >Diversão</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={estiloHome.flexbox} >
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/verdadeoudesafio.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/hottakes.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/escolheum.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/memebattle.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/quizdecompatibilidade.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/verdadesementira.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
        </ScrollView>
      </View>

      <View style={estiloHome.container}>
        <Text style={estiloHome.title} >Explorar</Text>
        <Pressable style={estiloHome.matchPress}>
          <Image source={require('../../../assets/explorar.png')} resizeMode='contain' style={estiloHome.capaCruza} />
        </Pressable>
      </View>  

      <View style={estiloHome.container}>
        <Text style={estiloHome.title} >Eventos Proximity</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={estiloHome.flexbox} >
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/hhdossolteiros.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/noitedovinho.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/auladedanca.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/festanerd.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/quartadossolteiros.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
        </ScrollView>
      </View>

      <View style={estiloHome.container}>
        <Text style={estiloHome.title} >Casamento</Text>
        <Pressable style={estiloHome.matchPress}>
          <Image source={require('../../../assets/casamento.png')} resizeMode='contain' style={estiloHome.capaCruza} />
        </Pressable>
      </View>

      <View style={estiloHome.container}>
        <Text style={estiloHome.title} >Passeios pela cidade</Text>
        <Pressable style={estiloHome.matchPress}>
          <Image source={require('../../../assets/passeios.png')} resizeMode='contain' style={estiloHome.capaCruza} />
        </Pressable>
      </View>


      </ScrollView>    



  );
}
