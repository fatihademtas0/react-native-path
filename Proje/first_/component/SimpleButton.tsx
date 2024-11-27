import React from 'react';
import {View ,Button ,Alert} from 'react-native';

const SimpleButton = () => {
  const handlePress = () => {
    Alert.alert('Başlık' , 'Butona Tıklandı!');
  };
  return (
    <View style={{
      flex:1,
      justifyContent: 'center',
      alignItems:'center',
      top:10
    }}>
      <Button title='Tıklayınız'
      color={'darkblue'}
      onPress={handlePress} />
    </View>
  );
}

export default SimpleButton;
