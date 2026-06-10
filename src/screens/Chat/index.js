import { useState } from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';

const mockMensagens = [];


const Chat = () => {
  const [mensagens, setMensagens] = useState(mockMensagens);
  const [novaMsg, setNovaMsg] = useState('');

  const enviar = () => {
    if (novaMsg) {
      setMensagens([{ id: Date.now(), text: novaMsg, meu: true}]);
      setNovaMsg('');
    }
  };

  return (
    <View style={{ flex: 1}}>
      <FlatList
        data={mensagens}
        renderItem={({item}) => (
          <View style={{alignSelf: item.meu ? 'flex-end' : 'flex-start'}}>
            <Text>{item.text}</Text>
          </View>  
        )}
      />

      <TextInput
        value={novaMsg}
        onChangeText={setNovaMsg}
        placeholder="Digite uma mensagem"
        onSubmitEditing={enviar}
      />    

    </View>
  );

};

export default Chat;