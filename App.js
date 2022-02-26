import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Olá Mundo!</Text>
      <View style={styles.bloco}>
        <Text style={styles.textBlock}>Valor 1</Text>
        <TextInput
        style={styles.input}
        keyboardType="numeric"
        />
      </View>
      <View style={styles.bloco}>
        <Text style={styles.textBlock}>Valor 2</Text>
        <TextInput
        style={styles.input}
        keyboardType="numeric"
        />
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Somar</Text>
        </TouchableOpacity>
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
