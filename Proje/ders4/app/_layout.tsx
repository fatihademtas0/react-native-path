import { Stack } from 'expo-router/stack';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
  return(
    <>
      <StatusBar style='auto'/>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4511e', // bordo
            //layout kullanan diğer sayfalarda ekstra bir düzenlenme sağlanmazsa bu renk geçerlidir
          },
          headerTintColor:'#fff', // yukarıdaki başlık rengi
          headerTitleStyle: {
            fontWeight: 'bold', // yukarıdaki başlık kalınlığı
          },
        }}
      />
    </>)
}

