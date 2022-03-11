import { StatusBar } from 'expo-status-bar';
import { React, useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [valor1, setValor1] = useState();
  const [valor2, setValor2] = useState();
  const [resultado, setResultado] = useState(0);

  function Somar(){
  setResultado(parseFloat(valor1) + parseFloat(valor2));
  console.log(resultado);
  }

  function Subtracao(){
  setResultado(parseFloat(valor1) - parseFloat(valor2));
  console.log(resultado);
  }
  
  function Multiplicacao(){
  setResultado(parseFloat(valor1) * parseFloat(valor2));
  console.log(resultado);
  }

  function Divisao(){
  setResultado(parseFloat(valor1) / parseFloat(valor2));
  console.log(resultado);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Olá Mundo!</Text>
      <View style={styles.bloco}>
        <Text style={styles.textBlock}>Valor 1</Text>
        <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={valor1}
        onChangeText={(texto)=>setValor1(texto)}
        />
      </View>

      <View style={styles.bloco}>
        <Text style={styles.textBlock}>Valor 2</Text>
        <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={valor2}
        onChangeText={(texto)=>setValor2(texto)}
        />
      </View>

      <View style={styles.bloco}>
      <TouchableOpacity
      style={styles.button}
      onPress = {Somar}>

      <Text style={styles.textButton}>Somar</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.bloco}>
      <TouchableOpacity
      style={styles.button}
      onPress = {Subtracao}>

      <Text style={styles.textButton}>Subtrair</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.bloco}>
      <TouchableOpacity
      style={styles.button}
      onPress = {Multiplicacao}>

      <Text style={styles.textButton}>Multiplicar</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.bloco}>
      <TouchableOpacity
      style={styles.button}
      onPress = {Divisao}>

      <Text style={styles.textButton}>Dividir</Text>
      </TouchableOpacity>
      </View>
      
      <View style={styles.bloco}>
        <Text style={styles.textBlock}>Resultado:{resultado}</Text>
      </View>
    </View>
        );
      }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 30,
  },
  bloco: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    width: '100%',
  },
  input: {
    borderColor: '#FFF',
    borderWidth: 2,
    fontSize: 30,
    width: '80%',
    color: '#fff',
  },
  textBlock: {
    color: '#FFF',
    fontSize: 20,
  },
  button: {
    margin: 5,
    textAlign: 'center',
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 5,
  },
  textButton: {
    color: '#000',
    fontSize: 20,
  }
});
