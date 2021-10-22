import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text>Hola putas! :D</Text>
=======
      <Text>Hola putas!</Text>
      
>>>>>>> bb9d96ce06d3cfec8615e17c8f96a7049d57f409
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
