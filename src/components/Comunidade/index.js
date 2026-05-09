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
        <Text style={estiloComunidade.infos}><Text style={estiloComunidade.infodest}>1120</Text> pessoas frequentam</Text>
      </View>
      <View style={estiloComunidade.agora}>
        <Text style={estiloComunidade.qttext}><Text style={estiloComunidade.qtagora}>12</Text> pessoas aqui agora:</Text>
      </View>
      <View style={estiloComunidade.gridCards}>

        {MOCK_PESSOASCOMUNIDADE.map((pessoa) => (

          <Pressable
            key={pessoa.id}
            style={estiloComunidade.cardCom}
          >
            <Image
              source={pessoa.photo}
              resizeMode='contain'
              style={estiloComunidade.capaCardProfile}
            />  
          </Pressable>  
        ))}




       
        
      </View>
    </ScrollView>
  );
}
