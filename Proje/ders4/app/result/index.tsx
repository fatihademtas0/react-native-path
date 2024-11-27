import { StyleSheet, View , Text ,Image , Alert , TouchableOpacity  } from "react-native";
import { router , useLocalSearchParams , Stack} from 'expo-router';

export default function Result() {
  // bu sayfaya gelen paramtere değerlerini params değişkenine alma
  
  const params = useLocalSearchParams();

  // params değişkeni içerisindeki değerlerş id ve text set etme

  const { id , text } = params;

  // stack yapısına uygun olarak önceki sayfaya dönüi (back)

  const onClick = () => {
    router.back();
  }

  const onClickHeaderRightButton = () => {
    Alert.alert('Girilen Değer' , 'id = '+(id as string)+ ' text = '+(text as string));
  }

  return (
    <View>
      <Text> Id: {id} </Text>
      <Text> Girilen Mesaj : {text} </Text>
      <Text style={{ padding : 20}}> Resim Gösterme</Text>
    {
      /* proje kasörü içerisindeki bir resmi gösterme 
      <Image source= {require("../../assets/react-native.png")} style={{ width: 100 , height:100}} />
      */}
      <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' ,
      }} style={{ width: 100 , height:100}} />

      <TouchableOpacity style={styles.top} onPress={onClick}>
        <Text style={styles.link}>
          Geri
        </Text>
      </TouchableOpacity>

      <Stack.Screen
        options={{
          title: 'Sonuç Sayfası',
          headerStyle: { backgroundColor: 'blue'},
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <TouchableOpacity onPress=
            {onClickHeaderRightButton}>
              <Text>Sağ Üst Button</Text>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  top:{
    top:10,
  },
  link: {
    backgroundColor: '#fff222',
    padding: 10,
    color: 'red',
  }
});