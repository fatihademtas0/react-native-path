import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import SimpleButton from "@component/SimpleButton";
import Selam from "@component/Selam";


export default function App() {
  return (
    <>
      <SimpleButton/>
      <Selam name="Fatih Adem Taş" />
    </>
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
