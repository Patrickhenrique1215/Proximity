import { View, Text, StyleSheet } from 'react-native';

export default function Notificacoes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Você não tem notificações</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    color: 'gray'
  }

});