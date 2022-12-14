import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarsList from './Components/CarsList';
import Header from './Components/Header/Index';
// import CarsList from './components/CarsList';
// import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <CarsList></CarsList>
     
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