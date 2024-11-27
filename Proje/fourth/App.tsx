import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import MyText from "@component/MyText";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "blue",
          fontSize: 15,
        }}
      >
        Renkli yazı mavi 15
      </Text>

      <Text style={styles.kirmizi}>Kırmızı Yazı</Text>

      <Text style={styles.buyukYazıMavi}>Büyük Yazı Mavi</Text>

      <Text style={[styles.buyukYazıMavi, styles.kirmizi]}>
        Büyük Mavi ve Kırmızı
      </Text>

      <Text style={[styles.kirmizi, styles.buyukYazıMavi]}>
        Kırmızı ve Büyük Mavi{" "}
      </Text>

      <Text style={[styles.kirmizi, styles.boldLabel]}>
        Yönetim Bilişim Sistemleri{" "}
      </Text>

      <Text style = {{
        color: 'blue',
        fontSize : 20,
        ...styles.boldLabel
       }}>
        Mobil Uygulama Geliştirme 
       </Text>

      <MyText 
       value="Yönetim Bilişim Sistemleri Mobil Uygulama"
       fontSize={40}
       fontWeight={'bold'}
       color={'#33cc55'}
       borderWidth={5}
       borderColor={'green'}
      />       

      <StatusBar style="auto" />
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
  boldLabel: {
    fontWeight: "bold",
    margin: 20,
  },
  buyukYazıMavi: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  kirmizi: {
    color: "red",
  },
});
