import { useState } from 'react';
import { View, Text, ScrollView, Image, Pressable, Animated, Easing } from 'react-native';

import estiloHome from './estiloHome';
import Comunidade from '../../components/Comunidade';


export default function Home() {

  const [telaAtiva, setTelaAtiva] = useState('lista');
  const [comunidadeSelecionada, setComunidadeSelecionada] = useState(null);
  const [fadeAnim] = useState(new Animated.Value(1));

  const handlePressComunidade = (comunidade) => {
    setComunidadeSelecionada(comunidade);

    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start(() => {
      setTelaAtiva('comunidade');
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });
  };

  const handleVoltar = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setTelaAtiva('lista');
      setComunidadeSelecionada(null);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });
  };

  const comunidades = [
    { id: 'tagshop', nome: 'Comunidade', componente: Comunidade, imagem: require('../../../assets/tagshop.png') },
    ];

  return (
    <Animated.View style={{flex: 1, opacity: fadeAnim}}>
      {telaAtiva === 'lista' ? (
      <ScrollView>

        <View style={estiloHome.container}>
          <Text style={estiloHome.title}>Comunidades</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={estiloHome.flexbox} >
            {comunidades.map((comunidade) => (
              <Pressable
                key={comunidade.id}
                style={estiloHome.card}
                onPress={() => handlePressComunidade(comunidade)}
              >
                <Image source={require('../../../assets/tagshop.png')} resizeMode='cover' style={estiloHome.capaCard} />
              </Pressable>  
            ))}

            <Pressable style={estiloHome.card}><Image source={require('../../../assets/lago.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/tagshop.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/unb.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/pqagclaras.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/pqcidade.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
       

          </ScrollView>
        </View>  


     <View style={estiloHome.container}>
        <Text style={estiloHome.title} >Cruzamentos</Text>
        <Pressable style={estiloHome.cruzaPress}>
          <Image source={require('../../../assets/cruza.png')} resizeMode='contain' style={estiloHome.capaCruza} />
        </Pressable>
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
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/lago.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/tagshop.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/unb.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/pqagclaras.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/pqcidade.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
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
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/lago.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/tagshop.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/unb.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/pqagclaras.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/pqcidade.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
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
      ) : (
        <Comunidade 
          onVoltar={handleVoltar}
          comunidadeId={comunidadeSelecionada?.id}
          nome={comunidadeSelecionada?.nome}
        />
      )}
    </Animated.View>



/*
    <ScrollView>
      <View style={estiloHome.container}>
        <Text style={estiloHome.title}>Comunidades</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={estiloHome.flexbox} >
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/lago.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/tagshop.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/unb.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/pqagclaras.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
          <Pressable style={estiloHome.card}><Image source={require('../../../assets/pqcidade.png')} resizeMode='cover' style={estiloHome.capaCard} /></Pressable>
        </ScrollView>
      </View>

 
    </ScrollView>*/
  );
}
