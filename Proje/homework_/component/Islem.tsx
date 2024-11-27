import React from 'react';
import { View, Text, StyleSheet , Button ,Alert } from 'react-native';

// Props arayüzü
interface Props {
  number1: number;
  number2: number;
  number3: number;
}

const Islem: React.FC<Props> = ({ number1, number2, number3 }) => {
  const toplam = (number1 + number2) * number3;

  const handlePress = () => {
    Alert.alert('Sonuç', `Toplam: ${toplam}`);
  };

  return (
    <View style={styles.container}>
      <Text>
        {number1} + {number2} * {number3}
      </Text>
      <Button title="Topla" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default Islem;
