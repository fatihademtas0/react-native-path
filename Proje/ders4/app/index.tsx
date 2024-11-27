import { Link , Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{margin:20}}>Expo Router açılış sayfası</Text>
      <Link href="/degerGiris" style={styles.link}>
      Deger Giriş Sayfasına Git
      </Link>
      <Stack.Screen
        options={{
          // sayfa üst bölgesi ayarlaması (bu sayfaya özel) yapılıyor
          title: 'Index Sayfası ilk sayfa', // başlık
          headerStyle: { backgroundColor: 'green'}, // arka plan rengi
          headerTintColor: '#fff', // yazı rengi
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30
          }
        }}
        />
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
  link: {
    backgroundColor: '#fff222',
    padding: 10,
    color: 'red'
  }
});
