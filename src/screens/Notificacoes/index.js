import { View, Text, StyleSheet, ScrollView, Image, FlatList } from 'react-native';

import estiloNotificacoes from './estiloNotificacoes';

import { MOCK_NOTIFICACOES } from '../../mocks/mocknotificacoes';


export default function Notificacoes() {

  const renderNotif = ({ item: notif }) => (
    <View style={estiloNotificacoes.caixa}>
        <Image source={notif.imagem} resizeMode="contain" style={estiloNotificacoes.imgnotif}></Image>
        <Text style={estiloNotificacoes.textnotif}>{notif.mensagem}</Text>
      </View>
  );

  return (
    
    <FlatList 
      data={MOCK_NOTIFICACOES}
      renderItem={renderNotif}
      keyExtractor={ (item) => item.id?.toString() || Math.random().toString() }
      style={estiloNotificacoes.tudo}
    />
  );
}
