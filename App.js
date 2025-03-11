import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert, Image } from 'react-native';
import Resultado from './components/Resultado';

const App = () => {
  const [nomeProduto, setNomeProduto] = useState('');
  const [preco, setPreco] = useState('');
  const [porcentagem, setPorcentagem] = useState('');
  const [precoFinal, setPrecoFinal] = useState(null);

  const calcular = () => {
    if (!nomeProduto || !preco || !porcentagem) {
      Alert.alert('Todos os campos são obrigatórios.');
      return;
    }

    const precoProduto = parseFloat(preco);
    const porcentagemAumento = parseFloat(porcentagem);
    const aumento = precoProduto * (porcentagemAumento / 100);
    setPrecoFinal(precoProduto + aumento);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.text}  >Calculadora de Aumento de Preço</Text>
      <Image
      source={require('./assets/calculadora.png')}
      style={{width: 80, height: 80}}
      />

      <View style={styles.div}>
        <TextInput
          style={styles.input}
          value={nomeProduto}
          placeholder='Nome do Produto'
          onChangeText={text => setNomeProduto(text)}
        />
        <TextInput
          style={styles.input}
          value={preco}
          placeholder='Preço'
          keyboardType='numeric'
          onChangeText={text => setPreco(text)}
        />
        <TextInput
          style={styles.input}
          value={porcentagem}
          placeholder='Porcentagem de Aumento'
          keyboardType='numeric'
          onChangeText={text => setPorcentagem(text)}
        />
        <Button title="Calcular" onPress={calcular} />
      </View>

      {precoFinal !== null && (
        <Resultado nomeProduto={nomeProduto} preco={preco} porcentagem={porcentagem} precoFinal={precoFinal} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#e6f4f1',
    
  },
  input: {
    height: 40,

    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },

  text: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#f59432',
    marginBottom: 20,
  },

  Image: {
    width: 100,
    height: 100,
  },

 
});

export default App;