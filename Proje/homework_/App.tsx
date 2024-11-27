import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Islem from "@component/Islem";


export default function App() {
  return (
    <View>
      <Islem number1={5} number2={10} number3={2} />
      <Islem number1={1} number2={2} number3={3} />
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
