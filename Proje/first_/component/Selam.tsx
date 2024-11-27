import React from 'react';
import {View , Text} from 'react-native';

interface Props {
  name: string;
}

const Selam = ({name}:Props ) => {
  return(
    <View style={{ padding:20}}>
      <Text> Merhaba , {name}!</Text>
    </View>
  );
};

export default Selam;