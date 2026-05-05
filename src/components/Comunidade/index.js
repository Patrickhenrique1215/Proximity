import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import estiloComunidade from './estiloComunidade';

import { MOCK_PESSOASCOMUNIDADE } from '../../mocks/pessoasComunidade';

export default function Comunidade({onVoltar, comunidadeId, nome}) {
  return (
    <ScrollView>
      <View style={estiloComunidade.caixaTopo}>
        <Text style={estiloComunidade.titulo}>Perto de Taguatinga Shopping</Text>
        <Text style={estiloComunidade.infos}>Evento geek hoje às 15h</Text>
        <Text style={estiloComunidade.infos}>Tirolesa de 20/05 a 28/05</Text>
        <Text style={estiloComunidade.infos}>1120 pessoas frequentam</Text>
        <Text style={estiloComunidade.infos}>8 aqui agora</Text>
      </View>
      <View style={estiloComunidade.gridCards}>
        <Pressable style={estiloComunidade.cardCom}>
          <Image source={require('../../../assets/profiles/p1.png')} resizeMode='contain' style={estiloComunidade.capCardProfile} />
        </Pressable>
      </View>
    </ScrollView>
  );
}
