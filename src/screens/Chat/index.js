import { View, Text, StyleSheet } from 'react-native';

export default function Chat() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Você ainda nao tem conversas</Text>
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