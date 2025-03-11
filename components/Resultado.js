import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Resultado = ({ nomeProduto, precoFinal, preco, porcentagem }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        O valor do produto {nomeProduto} é de R$ {preco} e com o aumento de {porcentagem}% o valor final é de R$ {precoFinal}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#68b5d2',
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  text: {
    color: '#2b809b',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Resultado;