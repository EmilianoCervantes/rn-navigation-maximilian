import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={estilos.text}>HOLA</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  text: {
    fontSize: 50,
    fontFamily: 'OpenSans-Bold'
  }
});

export default App;