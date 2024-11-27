import React from "react";
import { View , Text ,TouchableOpacity , StyleSheet } from 'react-native';

const MyTouchableOpacity = () => {
  const [count , setCount] = React.useState(0);

  return (
    <>
    <Text style={styles.textFont}>
      Sayaç: {count}
    </Text>
    <View style={styles.view}>

      <TouchableOpacity
      style = {styles.buton}
      onPress={ () => setCount(count +1)}
      >
        <Text style= {styles.text}>
          &nbsp; + &nbsp;
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        style = {styles.buton}
        onPress={ () => setCount(count -1)}
      >
        <Text style= {styles.text}>
          &nbsp; - &nbsp;
        </Text>
      </TouchableOpacity>
      
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    width: 160,
    height: 40,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    width: 50,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  textFont: {
    fontSize: 30,
    marginLeft: 10,
  }
});

export default MyTouchableOpacity;