import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MyTouchableOpacity from '@component/MyTouchableOpacity';
import ItemList from '@component/ItemList';
import ItemListApi from '@component/ItemListApi';

export default function App() {
  return (
    <>
    <MyTouchableOpacity/>
    <ItemList/>
    <ItemListApi/>
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
