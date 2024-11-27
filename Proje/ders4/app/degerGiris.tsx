import { StyleSheet, Text, TextInput, View ,TouchableOpacity } from "react-native";
import { router , Stack } from 'expo-router';
import { useState} from 'react';

export default function DegerGiris() {
  const [text , onChangeText] = useState('');
  const [id , onChangeId] = useState('');
  const onClick = () => {
    // router.replace("/result") // sıradan yönlendirme
    
    // Stack (yığın) yapısına uygun yönlendirme
    router.push({
      pathname: "/result",
      params: { id: id , text: text}
    });
    // Stack yapısını mevcut sayfa için 
    // ezen yönlendirme: replace
    // router.replace({
    //  pathname: "/result",
    //  params: { id: id , text: text}
//  });
  }
  return (
    <View style={styles.container}>
      <Text>Değer Giriş Sayfası</Text>
      <TextInput
      placeholder="Id"
        style={styles.input}
        onChangeText={onChangeId}
        value={id}
      />
      <TextInput
      placeholder="mesaj"
        style={[styles.input , styles.inputGenislik]}
        multiline={true}
        numberOfLines={2}
        onChangeText={onChangeText}
        value={text}
      />
      <TouchableOpacity onPress={onClick}>
        <Text>Gönder</Text>
      </TouchableOpacity>
      <Stack.Screen
        options={{
          title: 'Değer Giriş Sayfası'
        }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 100,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputGenislik: {
    width: 200,
    height: 60,
    textAlignVertical: "top",
  },
});
